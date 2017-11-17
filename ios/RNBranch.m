//
//  RNBranch.m
//  airApp
//
//  Created by Daniel Sykes-Turner on 16/11/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "RNBranch.h"

#import "AppDelegate.h"

@interface RNBranch()
@end

@implementation RNBranch

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(makePayment:(NSString *)test) {
  
  PKPaymentRequest *request = [PKPaymentRequest new];
  PKPaymentAuthorizationViewController *applePayController = [[PKPaymentAuthorizationViewController alloc] initWithPaymentRequest:request];
  [((AppDelegate *)[[UIApplication sharedApplication] delegate]).window.rootViewController presentViewController:applePayController animated:YES completion:^{
    NSLog(@"Completed");
  }];
  
  NSDecimalNumber *value = [NSDecimalNumber decimalNumberWithMantissa:200 exponent:-2 isNegative:YES];
  request.paymentSummaryItems = @[
                                  [PKPaymentSummaryItem summaryItemWithLabel:test amount:value]
                                  ];
  
  request.merchantIdentifier = @"merchant.joshparnham.appair";
  request.supportedNetworks =  @[PKPaymentNetworkVisa, PKPaymentNetworkMasterCard, PKPaymentNetworkAmex];
  request.merchantCapabilities = PKMerchantCapability3DS;
  request.countryCode = @"US";
  request.currencyCode = @"USD";
}

@end
