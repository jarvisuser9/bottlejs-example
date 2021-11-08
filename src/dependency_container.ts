import Bottle from "bottlejs";

export enum InjectionKeys {
  CUSTOMER_ORDER = "customerOrder",
  RESTRICTIONS_ADAPTER = "restrictionsAdapter",
  PAYMENT_ADAPTER = "paymentAdapter"
}

interface CustomerOrderClient {
  getOrder(orderId: string): Promise<{ orderId: string }>;
}

/**
 * A factory function that creates an sdk
 */
function createCustomerOrderClient(): CustomerOrderClient {
  console.log("create customer order");
  return {
    async getOrder(orderId: string) {
      return Promise.resolve({ orderId });
    }
  };
}

const container = new Bottle<InjectionKeys>();

/**
 * Register the SDK factory under the key so it can be retrieved
 */
container.service(InjectionKeys.CUSTOMER_ORDER, createCustomerOrderClient);

/**
 * An example consumer of the customer order sdk
 */
function createRestrictionsAdapter(customerOrder: CustomerOrderClient) {
  return {
    async getRestrictions() {
      const order = await customerOrder.getOrder("123");
      return `got restrictions ${order.orderId}`;
    }
  };
}

container.service(
  InjectionKeys.RESTRICTIONS_ADAPTER,
  createRestrictionsAdapter,
  InjectionKeys.CUSTOMER_ORDER
);

export type RestrictionsAdapter = ReturnType<typeof createRestrictionsAdapter>;

/**
 * Another example consumer of the customer order sdk
 */
function createPaymentAdapter(customerOrder: CustomerOrderClient) {
  return {
    async getPaymentStatus() {
      const order = await customerOrder.getOrder("456");
      return `got payment status ${order.orderId}`;
    }
  };
}

container.service(
  InjectionKeys.PAYMENT_ADAPTER,
  createPaymentAdapter,
  InjectionKeys.CUSTOMER_ORDER
);

export type PaymentAdapter = ReturnType<typeof createPaymentAdapter>;

export default container.container;
