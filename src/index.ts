import container, {
  InjectionKeys,
  PaymentAdapter,
  RestrictionsAdapter
} from "./dependency_container";

function bootstrapDIContainer() {
  const payment: PaymentAdapter = container[InjectionKeys.PAYMENT_ADAPTER];

  const restrictions: RestrictionsAdapter =
    container[InjectionKeys.RESTRICTIONS_ADAPTER];

  payment.getPaymentStatus().then((x) => {
    console.log(x);
  });

  restrictions.getRestrictions().then((x) => {
    console.log(x);
  });
}

bootstrapDIContainer();
