import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooglePayButtonModule } from '@google-pay/button-angular';

@Component({
  selector: 'app-pay-google',
  standalone: true,
  imports: [CommonModule, GooglePayButtonModule],
  templateUrl: './pay-google.component.html',
  styleUrls: ['./pay-google.component.scss']
})
export class PayGoogleComponent {

  buttonWidth = 240;
  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "49238479832345",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "1.00",
      currencyCode: "USD",
      countryCode: "US"
    }
  }

  onLoadPaymentData(event: any) {
    console.log(event)
  }
}
