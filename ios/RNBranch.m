//
//  RNBranch.m
//  airApp
//
//  Created by Daniel Sykes-Turner on 16/11/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "RNBranch.h"

#import "AppDelegate.h"

@interface RNBranch() <PKPaymentAuthorizationViewControllerDelegate>
@end

@implementation RNBranch

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(makePayment:(NSString *)price name:(NSString*)name) {
  PKPaymentRequest *request = [PKPaymentRequest new];
  
  NSDecimalNumber *value = [NSDecimalNumber decimalNumberWithString:price];
  request.paymentSummaryItems = @[[PKPaymentSummaryItem summaryItemWithLabel:name amount:value]];
  
  request.merchantIdentifier = @"merchant.joshparnham.appair";
  request.supportedNetworks =  @[PKPaymentNetworkVisa, PKPaymentNetworkMasterCard, PKPaymentNetworkAmex];
  request.merchantCapabilities = PKMerchantCapabilityEMV;
  request.countryCode = @"AU";
  request.currencyCode = @"AUD";
  
  PKPaymentAuthorizationViewController *applePayController = [[PKPaymentAuthorizationViewController alloc] initWithPaymentRequest:request];
  applePayController.delegate = self;
  
  dispatch_async(dispatch_get_main_queue(), ^{
    AppDelegate *del = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    UIViewController *root = del.window.rootViewController;
    if (root && applePayController) {
      [root presentViewController:applePayController animated:YES completion:nil];
    }
  });
  
}

- (void)paymentAuthorizationViewControllerDidFinish:(PKPaymentAuthorizationViewController *)controller {
  [controller dismissViewControllerAnimated:YES completion:nil];
}

- (void)paymentAuthorizationViewController:(PKPaymentAuthorizationViewController *)controller didAuthorizePayment:(PKPayment *)payment handler:(nonnull void (^)(PKPaymentAuthorizationResult * _Nonnull))completion {
  completion(PKPaymentAuthorizationStatusSuccess);
}

@end
