<script type="text/javascript" >
    var isOnlyMOItemExist = false;
    var preferred_payment_method = "";
    var preferred_payment_type = "credit_card";
    var paymentsInfo = {};
    var payment_type = ''; // holds the selected/preferred payment type
    var isErrorsNil = true;
    var invoicePaymentDetails = {};
    var popUpSubmittedDetails = {};
    var cart_data = {} ;
    var paymentDetails = {}; // which holds currently selected payment type details
    var orderId = '';
    var pickup_order_limit;
    var isPhoneNumberFieldExist = false;
    var isExistingUser = false;
    var shippingAddressInBilling = {};
    var isGuestFlow = false;
    var cxinfo_section_data_from_shipping_page = "true";
    var isGuestCheckoutFlow = isGuestFlow && cxinfo_section_data_from_shipping_page == 'true'
    var ccPaymentDetails = {};
    var isOptionalPaymentEnabled = false;
    var displayOptionalPayment = false;
    var isEnabledInternationalBilling = 'true';
    var isEuDeliveryOptionEnabled = false;
    var paymentCardFields = {};
    var billingAddressFields = {};
    var billingFields = {};
    var billingErrorMessages = {};
    var billingAddressFieldsTranslated = {};
    var guestUserBillingAddressFields = {};
    var loadBrainTreeJs = false;
    var vantivPaymentEnabled = false;
    var braintree_enviornment =  (true) ? 'production' : 'sandbox';
    var billing_new_event_tracked = false;
    var tempPageName = digitalData.page.pageInfo.pageName;
    var previousPageName = tempPageName;
    var isFromBilling = true;
    var isAddressValidationEnabled = 'false';
    var isBrainTreeJsFileLoaded = false;
    var creditCardBTInstance = undefined;
    var paymentsAvailable = false;
    var imagesPath = [];
    var flashObj = {};
    var billingParams = {"account":"TESTXSS123","controller":"billing","action":"billing","paypalPaymentId":"","threedsecure":null,"flash":{}};
    var supportedPaymentMethods = {};
    var isBillingInfoValid = true;
    var isBillingPage = true;
    var hasBillingAddressErrors = false;
    var client_Token = '';
    var timeAtPageLoad = new Date();
    var BTMerchantId = '';
    var isBraintreeClientTokenEmpty = false;
    var userFormData = {};
    var fieldLevelErrorType = {};
    var isDisplayZipInMiddle = false;
    var isDisplayCommaBeforeZip = false;
    var website = "snapfish_us";
    var isDisplayPhoneNumber = true;
    var is_cardtype_not_supported = "true";
    var billingDetailsHash = {"isFormatPhnoReq":true,"isFormatedCountryList":true,"cxinfo_section_data_from_shipping_page":true,"is_cardtype_not_supported":true,"regulatory_msgdisplay_websites":false,"validate_billingaddr_fileds":true,"validate_address_quality":false,"isFormatZipRequired":true,"streetbilling3_lbl_displayed":false,"displayZipMiddle":false,"displayCompanyFirst":false,"is_format_phone_num_required":true,"isDisplayComma":false,"isCustomerSectionNotsupport":false,"is_international_shipping_allowed":true,"is_mandate_field_message":false,"display_city_and_zip_in_same_row":false,"display_state_as_city":false,"hideDisplayingStrikeThrough":false,"toggleBillingStateForIntl":false,"showNewHeader":true,"enablePlaceOrderOnPageLoad":true,"hideStorePhone":false,"po_box_enabled_countries":["US"],"state_dropdown_supported_websites":["snapfish_us","mycollection_us","sfly-us","cvs_us","imemories_us","snapfish_au","snapfish_it","walgreens_us","sfly-ca","sbs_us"],"privacy_url":"https://www.snapfish.com/privacy-overlay","braintree_url":"https://js.braintreegateway.com/js/braintree-2.27.0.min.js","webSourceGroup":"sf-store","country_desc":"United States","vantiv_payments_url":"https://transaction.hostedpayments.com/?TransactionSetupID=","display_phone_number":true,"isDisplayPhNo":true,"isContextSupportsCompanyField":false,"isContextSupportsCountyField":false,"isContextSupportsFormV2Tag":false};
    var shippingDetailsHash = {'isFormatedCountryList': billingDetailsHash['isFormatedCountryList']};
    var isFormatZipRequired = true;
    var isInternationalShippingAllowed = true;
    var displayStateAsCity = false;
    var DeliveryNotSupportedZipcodes = {"FR":["97"]};
    var addrValidationConfig = [];
    var labelModeAddrValidationConfig = [];
    var addressVerifiedFlags = ["userVerified","systemVerified"];
    var paypalTotal = 0.0;
    var total_to_collect = 0.0;
    var total_to_pay_now = 0.0;
    var stateBillingClass = '';
    var mptTileTxt = 'Tile';
    var paymentGateWayUrls = {"client":"https://js.braintreegateway.com/web/3.65.0/js/client.min.js","applePay":"https://js.braintreegateway.com/web/3.65.0/js/apple-pay.min.js","dataCollector":"https://js.braintreegateway.com/web/3.65.0/js/data-collector.min.js","threeDSecure":"https://js.braintreegateway.com/web/3.65.0/js/three-d-secure.min.js","hostedFields":"https://js.braintreegateway.com/web/3.65.0/js/hosted-fields.min.js"};
    var isApplePayEnabled = true;
    var isCcPaymentPopupEnabled = true;
    var applePayObject = undefined;
    var applePayClientInstance = undefined;
    var vantiv_payment_configurations = {"companyName":"Snapfish photo","processTransactionTitle":"continue","returnURLTitle":"continue","embedded":"1","autoReturn":"1","isCVVValidationEnabled":"Y"};
    var isThreeDSecureEnabled = false;
    var threeDSecureFlow = "one_step";
    var isSkipVerifyAndStore = false;
    var headerImage = "https://www.snapfish.com/cart/assets/snapfish-81d585523e5e1382f2bd55bd5ec9e74263d3a90445afeb4af60c1fb91ad6f434.jpg";

    };
    var ImporterCodeConfig = [];
    var isProductLevelGuestFeatureEnabled = 'false';
    var stateDropDownHtml = '';
    var translations = {

    };
    var payment3DSErrors = {
        authenticate_error: "There was an error authenticating your payment method. Please re-enter your payment details and try again.",
        authenticate_failed: "There was an error authenticating your payment method. Please re-enter your payment details and try again.",
        authenticate_signature_verification_failed: "There was an error authenticating your payment method. Please re-enter your payment details and try again.",
        authenticate_unable_to_authenticate: "There was an error authenticating your payment method. Please re-enter your payment details and try again.",
        lookup_enrolled: "There was an error authenticating your payment method. Please re-enter your payment details and try again.",
        challenge_required: "There was an error authenticating your payment method. Please re-enter your payment details and try again.",
        authenticate_rejected: "There was an error authenticating your payment method. Please use an alternative payment type and try again.",
        authenticate_frictionless_failed: "There was an error authenticating your payment method. Please re-enter your payment details and try again.",
        default: "There was an error authenticating your payment method. Please try again or use an alternative payment type."
    };

    var cutoffTimeSupportedOptions = [];
    var open_invoice_available = false;
    var cartShippingAddressId = '';
    var preferred_payment_method = ""
    var brainTreeFlag = false;
    var has_billing_address_errors = false;
    var has_mandatory_fields_error = null;
    var cc_errorcodes_array = ['FraudError', 'InvalidCardNumber','InvalidAmount', 'ExpiryError','Declined','InvalidTransaction','Failed','Aborted','SecurityCodeDeclined','Required3DSAuthentication', 'UnknownError'];
    var paypal_reference_errorcodes_array = ['PaypalAuthorizationFailed','BillingAgreementCreationFailed','RedirectToPaypal','InvalidBillingAgreement','Declined','PayPalError'];
    var transaction_setup_id = false;
    var is_paypal_ref_txn_error = false;
    var cart_total = 0.0;
    var has_kiosk_shipbin = false;
    var ispickupOnly = false;
    var paypalskdurl = "https:\/\/www.paypal.com\/sdk\/js?client\-id=AeLH\-VryI92PffbhsBWgsnhFBftVk8zwbupdi_LwKAQFckM6OmwTGbKWOOKfUz2LQctrtvVygNvs6iXf&locale=en_US&currency=USD&merchant\-id=TVNHAUP4FB3YC&vault=true&commit=false&disable\-funding=credit,card&intent=authorize";
    var isPaymentRequired = false;
    var totalToPayAtStore = 0.0;
    var isMonetateEnabled = true;
    var isLineItemPromosavingEnabled = false;
    var edd_change_txt = "We're sorry, you have passed the cut off time, your delivery date has changed to <span class='error-text default-text font-bold'>%{date}.</span>";
    var max_edd = '';
    var creditCard_payment_details = {};
    var paypal_payment_details = {};
    var open_invoice_details = {};
    var multiple_payments_error_txt = "";
    var single_payment_error_txt = "";
    var apple_pay_promocode_error_txt = "{couponName} is only applicable when you check out with Apple Pay. Please switch your payment method or use a different coupon code";
    var showPickupLimitExceedMsg = false;
    var billingDimOnTimer = setTimeout(function(){
        dimOn();
    },2000);
    var afterPayCheckoutURL = "https://portal.afterpay.com/afterpay.js";
    var shippingAddress = {};
    var afterpayAvailable = false;
    var billingComponents = [],supportedDOFlags={},isDOFlagsChanged = false;
    var shipBinBasedDeliveryDates, shipBinBasedPickupTimes, totalToPayNow;
    var po_box_address_config = {"regex":".*(?:\\d*\\s*)?(?:(?:p[\\s.-]*o[\\s.-]*b[\\s.-]*ox?)|(?:p[\\s.-]*o[\\s.-]*box)|(?:post\\s*office\\s*bx?)|(?:p[\\s.-]*o[\\s.-]*bx?)|(?:postal\\s*bx?)|(?:p[\\s.-]*box)|(?:po[\\s.-]*box)|(?:p\\s*o\\s*b\\s*o\\s*x?)|(?:p\\s*o\\s*b\\s*x?)|(?:p\\s*o\\s*b\\s*ox)|(?:p[\\s.-]*o[\\s.-]*b[\\s.-]*x?)|(?:p[\\s.-]*o[\\s.-]*b[\\s.-]*ox)|(?:po[\\s.-]*box)|(?:post\\s*office\\s*box)|(?:p[\\s.\\/\\-]*o[\\s.\\/\\-]*box)|(?:post\\s*office\\s*box)|(?:p\\s*o\\s*box\\s*no?)|(?:p\\s*o\\s*box\\s*no)|(?:p[\\s.-]*o[\\s.-]*box\\s*no)|(?:p[\\s.-]*o[\\s.-]*box\\s*#)|(?:p\\s*o\\s*box\\s*#)|(?:post\\s*o[\\s.-]*box)|(?:post\\s*o\\s*box))[\\s.\\/\\-]*\\d*(?:.*)$","city_regex":"^(APO|FPO|DPO)(\\s.*)?$","state_regex":"^(AA|AE|AP)$","supported_lines":["line1","line2","line3"]};
    var parentCountry = "US";
    var ccPopupWindow = null;
    var isRoktEnabled = true;
    var enablePlaceOrderOnPageLoad = true;


    if(isApplePayEnabled) {
        var localeMsgs = {};
        localeMsgs['product_total'] = "Product Total:";
        localeMsgs['shipping_total'] = "Shipping:";
        localeMsgs['convenience_total'] = "Convenience Fee:";
        localeMsgs['discount_total'] = "Discount Total:";
        localeMsgs['sub_total'] = "Subtotal:";
        localeMsgs['tax_total'] = "Estimated Tax:";
        localeMsgs['bill_to'] = "Snapfish LLC:";
        localeMsgs['estimated_delivery_range'] = "";
        localeMsgs['estimated_delivery_date'] = "Delivery date:";
        var isPayableItemsExist, salePricePromos, paymentConfigurations, estimatedDeliveryDates;
    }

   var removeCardsConfirmLayerCloseElement = document.getElementById('remove_cards_confirm_layer_close');
   if (removeCardsConfirmLayerCloseElement) {
      removeCardsConfirmLayerCloseElement.addEventListener('click', function() {
         closeRemoveCCOverlay();
      });
   }
   var removeCardsConfirmLayerBtnCloseElement = document.getElementById('remove_cards_confirm_layer_btn_close');
   if (removeCardsConfirmLayerBtnCloseElement) {
      removeCardsConfirmLayerBtnCloseElement.addEventListener('click', function() {
         closeRemoveCCOverlay();
      });
   }
   var deleteCreditCardElement = document.getElementById('delete_credit_card');
   if (deleteCreditCardElement) {
      deleteCreditCardElement.addEventListener('click', function() {
         deleteCreditCard();
      });
   }
   var cancelEditBillingElement = document.getElementById('cancel_edit_billing');
   if (cancelEditBillingElement) {
      cancelEditBillingElement.addEventListener('click', function() {
         cancelEditBillingInfo();
      });
   }
   var payNowButtonTopElement = document.getElementById('pay_now_button_top');
   if (payNowButtonTopElement) {
      payNowButtonTopElement.addEventListener('click', function() {
         editBillingInfo();
      });
   }
   var payInStoreButtonTopElement = document.getElementById('pay_in_store_button_top');
   if (payInStoreButtonTopElement) {
      payInStoreButtonTopElement.addEventListener('click', function() {
         changeOptionalPayment('pay_in_store');
      });
   }
   var payNowButtonBottomElement = document.getElementById('pay_now_button_bottom');
   if (payNowButtonBottomElement) {
      payNowButtonBottomElement.addEventListener('click', function() {
         editBillingInfo();
      });
   }
   var payInStoreButtonBottomElement = document.getElementById('pay_in_store_button_bottom');
   if (payInStoreButtonBottomElement) {
      payInStoreButtonBottomElement.addEventListener('click', function() {
         changeOptionalPayment('pay_in_store');
      });
   }
   var paypalRefTxnErrorLayerCloseElement = document.getElementById('paypal_ref_txn_error_layer_close');
   if (paypalRefTxnErrorLayerCloseElement) {
      paypalRefTxnErrorLayerCloseElement.addEventListener('click', function() {
         closePaypalErrOverlay();
      });
   }
   var payWithCreditCardElement = document.getElementById('pay_with_credit_card');
   if (payWithCreditCardElement) {
      payWithCreditCardElement.addEventListener('click', function() {
         payWithCreditCard();
      });
   }
   var confirmLayerCloseElement = document.getElementById('confirm_layer_close');
   if (confirmLayerCloseElement) {
      confirmLayerCloseElement.addEventListener('click', function() {
         closeStorePOOverlay();
      });
   }
   var deliveryDateWarnCloseElement = document.getElementById('delivery_date_warn_close');
   if (deliveryDateWarnCloseElement) {
      deliveryDateWarnCloseElement.addEventListener('click', function() {
         closeDeliveryDateWarnOverlay();
      });
   }
   var dateWarnOverlayContinueElement = document.getElementById('date_warn_overlay_continue');
   if (dateWarnOverlayContinueElement) {
      dateWarnOverlayContinueElement.addEventListener('click', function() {
         closeDeliveryDateWarnOverlay(true);
      });
   var b_countryElement = document.getElementById('b_country');
   if (b_countryElement) {
      b_countryElement.addEventListener('click', function() {
         loadState(this.value);
      });
   }
   }
   var billingForm = document.getElementById('billing_form');
   if (billingForm) { 
      billingForm.onsubmit = function(event) {
         event.preventDefault();
         return false;
      };
   }
function preventDefaultClick(e) {
   e.preventDefault();
   e.stopPropagation();
}

function focusAndHighlight(elementId, borderClass) {
   var element = document.getElementById(elementId);
   if (element) {
      element.focus();
      element.classList.add(borderClass);
   }
}

var overlayConfig = [
   {
      addDetailsBtn: 'add_details_btn',
      closeBtn: 'payment_contact_info_missing_overlay_close',
      focusElement: 'popup_add_cc_card_link',
      borderClass: 'border-focus-payment',
      hideFunction: hidePaymentContactMissingOverlay
   },
   {
      addDetailsBtn: 'add_payment_btn',
      closeBtn: 'only_payment_info_missing_overlay_close',
      focusElement: 'popup_add_cc_card_link',
      borderClass: 'border-focus-payment',
      hideFunction: hideOnlyPaymentMissingOverlay
   },
   {
      addDetailsBtn: 'add_paypal_payment_continue_btn',
      closeBtn: 'paypal_payment_info_missing_overlay_close',
      focusElement: 'verify_paypal_account',
      borderClass: 'border-focus-paypal',
      hideFunction: hidePaypalPaymentMissingOverlay
   },
   {
      addDetailsBtn: 'add_afterpay_continue_btn',
      closeBtn: 'afterpay_payment_info_missing_overlay_close',
      focusElement: 'afterpay_button',
      borderClass: 'border-focus-other-payment',
      hideFunction: hideAfterpayPaymentMissingOverlay
   },
   {
      addDetailsBtn: 'applepay_payment_continue_btn',
      closeBtn: 'applepay_payment_info_missing_overlay_close',
      focusElement: 'applepay_button',
      borderClass: 'border-focus-other-payment',
      hideFunction: hideApplepayPaymentMissingOverlay
   }
];

for (var i = 0; i < overlayConfig.length; i++) {
   var config = overlayConfig[i];
   
   var addDetailsBtn = document.getElementById(config.addDetailsBtn);
   if (addDetailsBtn) {
      addDetailsBtn.addEventListener('click', (function(cfg) {
         return function(e) {
            preventDefaultClick(e);
            focusAndHighlight(cfg.focusElement, cfg.borderClass);
            cfg.hideFunction();
         };
      })(config));
   }
   
   var closeBtn = document.getElementById(config.closeBtn);
   if (closeBtn) {
      closeBtn.addEventListener('click', (function(cfg) {
         return function(e) {
            preventDefaultClick(e);
            cfg.hideFunction(true);
         };
      })(config));
   }
}

function isAppleDevice() {
    var userAgent = navigator.userAgent.toLowerCase();
    return /iPad|iPhone|iPod/.test(userAgent) || 
           (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

  var reopenCcPopup = document.getElementById('reopen-payment-popup-window-btn');
  var blackoutOverlay = document.getElementById('blackout-overlay');
  var popup = document.getElementById('popover_popup');
  var closePopup = document.getElementById("close-popup");
  var closeCcPopupWindowIcon = document.getElementById('close-payment-popup-window');

  if (reopenCcPopup) {
    reopenCcPopup.addEventListener('click', function () {
      if (isAppleDevice()) {
        if (blackoutOverlay) blackoutOverlay.classList.remove("hide");
        if (popup) popup.style.display = "block";
      } else {
        openCcPaymentPopup();
      }
    });
  }

  if (closePopup) {
    closePopup.addEventListener("click", function () {
      if (popup) popup.style.display = 'none';
      if (blackoutOverlay) blackoutOverlay.classList.add('hide');
      closeCcPaymentPopup();
    });
  }

  if (closeCcPopupWindowIcon) {
    closeCcPopupWindowIcon.addEventListener('click', function () {
      if (popup) popup.style.display = 'none';
      if (blackoutOverlay) blackoutOverlay.classList.add('hide');
      closeCcPaymentPopup();
    });
  }

  if (blackoutOverlay) {
    blackoutOverlay.addEventListener('click', function (e) {
      var isClickInsidePopupOrButtons = popup.contains(e.target) ||
        e.target.closest('#close-payment-popup-window') ||
        e.target.closest('#close-popup') ||
        e.target.closest('#reopen-payment-popup-window-btn');

      if (isClickInsidePopupOrButtons) return;

      if (isAppleDevice()) {
        if (popup && popup.style.display !== 'block') {
          popup.style.display = 'block';
        }
      } else {
        openCcPaymentPopup();
      }
    });
  }

    function getBillingInfo(){

        $.ajax({
            url: "getbillinginfo",
            method: 'POST',
            headers: {'Noodle':user_info['Noodle'],'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')},
            dataType: "json",
            data: {"account":"TESTXSS123","controller":"billing","action":"billing","paypalPaymentId":"","threedsecure":null,"flash":{}},
            success: function(resp){
                handleBillingResponse(resp);
            },
            error: function(ajaxOptions) {
                systemError(ajaxOptions);
            }
        });
    }
    getBillingInfo();

    function handleBillingResponse(billingInfo){
        if(billingInfo['cartEmpty']){
            changeURL("/emptycart");
            return;
        }
        if(billingInfo['redirectToCart']){
            changeURL("/shoppingcart");
            return;
        }
        if(billingInfo['redirectToShipping']){
            var queryUrl="";
            var shippingParams = Object.keys(billingInfo['paramsHash']);
            for(var i=0;i<shippingParams.length;i++){
                queryUrl+= key +"="+ billingInfo['paramsHash'][key];
                if( i < shippingParams.length -1)
                    queryUrl+= "&";
            }
            changeURL("/shipping?"+queryUrl);
            return;
        }
        parallelCallsResponse = billingInfo['parallel_calls_response']; // reassign to response before calling thumbnail display calls
        showPickupLimitExceedMsg = billingInfo['showPickupLimitExceedMsg'];
        isApplePayEnabled = billingInfo['showPickupLimitExceedMsg'] ? false : isApplePayEnabled;
        
        getApplePayPromo(parallelCallsResponse['promotions_desc']);
        setDataToBillingVars(billingInfo);
        showOrHideBillingElements(billingInfo);
        getBillingContent(billingInfo);
        getCustomsCode(billingInfo);
        //load after pay js
        afterPayCallBack();
        updateHeaderHref();
    }
    function afterPayCallBack() {
        preferred_payment_type = getPreferredPayment();
        paymentsInfo['afterpay'] = {
            'is_preferred' : preferred_payment_type === "afterpay",
            'details' : {},
            'available' : afterpayAvailable,
            'error_flow' : !$.isEmptyObject(flashObj['errors']) && !isUndefinedOrEmpty(flashObj['errors']['afterpay_error']),
            'is_vantiv_txn_flow' : false
        };
        $.when.apply($,billingComponents).done(function () {
            triggerOnLoad();
            orderSummaryView.displayParallelCallsResponse(parallelCallsResponse);
            if (afterpayAvailable) {
                window.addEventListener("Afterpay.ready", function() {
                    styleAfterpayMessages();
                });
                displayAfterPayMessage(total_to_pay_now, parallelCallsResponse['after_pay_config'],user_info); //display after pay message
                loadAfterPayJS(afterPayJSURL, false);
                loadAfterPayJS(afterPayCheckoutURL, true);
            } else {
                $('#afterpay_payment').hide();
            }
        }).fail(function (){
            dimOff();
            clearInterval(billingDimOnTimer);
        });
    }

    function updateHeaderHref(){
      var customSkuPartnersInCart = [];
      for (var key in parallelCallsResponse.sku_details) {
        if (parallelCallsResponse.sku_details.hasOwnProperty(key)) {
          var skuPartner = parallelCallsResponse.sku_details[key].custom_sku_for_partner;
          if(parallelCallsResponse.sku_details[key].guest_checkout_support == null)
            customSkuPartnersInCart.push(null);
          if(skuPartner!=null && customSkuPartnersInCart.indexOf(skuPartner) === -1)
            customSkuPartnersInCart.push(skuPartner);
        }
      }
      if(customSkuPartnersInCart.length === 1 && customSkuPartnersInCart[0]){
        $("#header_container .omnituretrackthis").attr("href", function(){ // update logo href in header
            return "/"+customSkuPartnersInCart[0];
        });
      }
    }

    // it is for getting all content like payments/billing form/order history
    function getBillingContent(billingInfo){
        var headersObj = {"Noodle": user_info['Noodle'],"X-CSRF-Token": $('meta[name="csrf-token"]').attr('content'),"Accept": "application/json", "Content-Type":"application/json"};

        var existingPaymentsRequestBody = {'payments_info': paymentsInfo, 'billing_details_hash':billingDetailsHash,'is_vantiv_payment_enabled': vantivPaymentEnabled,
            'display_optional_payment': displayOptionalPayment,'params':billingParams,'user_info':user_info, 'is_cc_payment_popup': isCcPaymentPopupEnabled};

        if(!displayOptionalPayment){
            billingComponents.push($.ajax({
                url: 'existingpaymentscomponent',
                method: 'POST',
                headers: headersObj,
                data: JSON.stringify(existingPaymentsRequestBody),
                success: function (response) {
                    $("#existing_payment_section").append(response);
                },
                error: function (ajaxOptions) {
                     systemError(ajaxOptions);
                }
            }));
        }

        var paymentOptionsRequestBody = {'is_vantiv_payment_enabled':vantivPaymentEnabled,'display_optional_payment':displayOptionalPayment,'supported_payment_methods':supportedPaymentMethods,
            'billing_details_hash':billingDetailsHash, 'asset_path_prefix':'https://prd-static.sf-cdn.com/cart/release-20260121-060502-8c1d7e4','payments_info':paymentsInfo,
            'paypal_payment_details':paypal_payment_details,'open_invioce_config':paymentsInfo['open_invoice']['limit'],'user_info':user_info,
            'billing_address_fields':billingAddressFields,'open_invoice_details':open_invoice_details,'user_form_data':userFormData,
            'flash':flashObj,'source':'billilng','payment_card_fields':paymentCardFields,'is_apple_pay_enabled':isApplePayEnabled,
            'brain_tree_flag':brainTreeFlag,'client_token':client_Token || "", 'total_to_pay': total_to_pay_now, 'is_cc_payment_popup_enabled':isCcPaymentPopupEnabled, 
            'paymentsAvailable': paymentsAvailable, 'ispickupOnly': ispickupOnly
        }

        billingComponents.push($.ajax({ 
            url: 'paymentoptionscomponent',
            method: 'POST',
            headers: headersObj,
            data: JSON.stringify(paymentOptionsRequestBody),
            success: function (response) {
                $("#payment_options").append(response);
            },
            error: function (ajaxOptions) {
                systemError(ajaxOptions);
            }
        }));

        var billingFormRequestBody = {'is_vantiv_payment_enabled':vantivPaymentEnabled,'billing_details_hash':billingDetailsHash,'billing_address_fields':billingAddressFields,
            'creditCard_payment_details':creditCard_payment_details,'open_invoice_details':open_invoice_details,'user_form_data':userFormData,
            'payments_info':paymentsInfo,'flash':flashObj,'user_info':user_info,'source':'billing','payment_card_fields':paymentCardFields,
            'brain_tree_flag':brainTreeFlag,'client_token':client_Token, 'is_cc_payment_popup_enabled':isCcPaymentPopupEnabled
        }

        if(!displayOptionalPayment && vantivPaymentEnabled){
            billingComponents.push($.ajax({
                url: 'billingformcomponent',
                method: 'POST',
                headers: headersObj,
                data: JSON.stringify(billingFormRequestBody),
                success: function (response) {
                    $("#cc_billing_form").append(response);
                },
                error: function (ajaxOptions) {
                    systemError(ajaxOptions);
                }
            }));
        }

        var data = JSON.parse(JSON.stringify(billingInfo['parallel_calls_response'])); // Deep clone as we are modifying global scope data
        for (var id in data['project_details']){
            if(data['project_details'].hasOwnProperty(id)){
                delete data['project_details'][id]['cart_icon_url'];
            }
        }
        var guest_user_data = {}; // This logic is to preserve entered guest details in error flow
        if (isGuestCheckoutFlow) {
            var emailFromStorage = localStorage.getItem('guestCheckoutEmailTemp');
            var emailToUse = emailFromStorage || (userFormData && userFormData['emailGuest']) || '';
            
            guest_user_data = {
                'firstName': (userFormData && userFormData['firstNameGuest']) || '',
                'lastName': (userFormData && userFormData['lastNameGuest']) || '',
                'phone': (userFormData && userFormData['phoneGuest']) || '',
                'emails': [emailToUse]
            };

            if (!guest_user_data.firstName && billingInfo.parallel_calls_response && billingInfo.parallel_calls_response.shipping_addresses) {
                var shipping_addresses = billingInfo.parallel_calls_response.shipping_addresses;
                var shippingAddress = null;

                for (var key in shipping_addresses) {
                    if (shipping_addresses.hasOwnProperty(key)) {
                        var address = shipping_addresses[key];
                        if (address.tags && (address.tags.includes('self') || address.tags.includes('shipping'))) {
                            shippingAddress = address;
                            break;
                        }
                    }
                }

                if (shippingAddress) {
                    guest_user_data['firstName'] = shippingAddress.firstName || '';
                    guest_user_data['lastName'] = shippingAddress.lastName || '';
                    guest_user_data['phone'] = shippingAddress.phone || '';
                }
            }
        } else if(!$.isEmptyObject(userFormData) && !isUndefinedOrEmpty(userFormData['emailGuest']) && !isUndefinedOrEmpty(userFormData['phoneGuest'])){
          guest_user_data['emails'] = [];
          guest_user_data['emails'][0] = userFormData['emailGuest'];
          guest_user_data['phone'] = userFormData['phoneGuest'];
        }

        var orderHistoryRequestBody = {'locale_source':'billing', 'cart_info':cart_data,'is_optional_payment_enabled':isOptionalPaymentEnabled,'is_guest_flow':isGuestFlow,'is_only_mo_item_exist':isOnlyMOItemExist,
            'parallel_calls_response':data,'page_config':billingDetailsHash,'guest_user_details':guest_user_data,
            'guest_address_fields':guestUserBillingAddressFields,'source':'billing','user_form_data':userFormData,
            'cart_savings':billingInfo['cart_savings'],'refund_amount':0,'is_apple_pay_enabled':isApplePayEnabled,
            'has_kiosk_shipbin':has_kiosk_shipbin,'online_payment_config':billingInfo['parallel_calls_response']['online_payment_config']
        };
        billingComponents.push($.ajax({
            url: 'orderhistorysection',
            method: 'POST',
            headers: headersObj,
            data: JSON.stringify(orderHistoryRequestBody),
            success: function (response) {
                $('#order_summary_section').append(response);
            },
            error: function (ajaxOptions) {
                systemError(ajaxOptions);
            }
        }));
    }

    function triggerOnLoad(){
        dimOff();
        $(".input-fields input").change(function() {
            if ($(this).val() !== '') {
               $(this).addClass("filled-input-data");
            } else {
                $(this).removeClass("filled-input-data");
            }
        });
        clearInterval(billingDimOnTimer);
        if(transaction_setup_id){
            getTransactionId("cart"); // call on load in new user case
        }

        // scPayment event is tracked only when user is prompted for payment details
        var events = !paymentsAvailable ? ['scBilling','scOrderReview'] : ['scBilling','scPayment','scOrderReview'];
        trackOmnitureData(cart_data, parallelCallsResponse, events,'billing',user_info['locale']);
        if(flashObj['is_from_cart'] === 'true' || billingParams['is_from_cart'] === 'true')
            events.push('scCheckout');
        if(flashObj['is_coupon_applied'] === 'true' || billingParams['is_coupon_applied'] === 'true')
            events.push('couponApplied');
        digitalData['event'] = [];
        for(var index in events) {
            digitalData['event'].push({'eventInfo':{'eventName':events[index]}});
        }
        if(!isExistingUser) {
            digitalData['event'].push({'eventInfo':{'eventName':'billingDetailsNew'}});
            billing_new_event_tracked = true;
        }
        // set mode as edit in new user and vantiv session flow if payments available
        if(paymentsAvailable && (!isExistingUser || paymentsInfo.credit_card.is_vantiv_txn_flow))
            $('#mode').val('edit');
        else
            $('#mode').val('label');

        showEddUpdateMsg();
        if(!isCcPaymentPopupEnabled && paymentsAvailable && loadBrainTreeJs && (paymentsInfo.credit_card.is_preferred || !isExistingUser )){
            // load braintree on page load in cc preferred and new user case for non vantiv contexts
            $("#cart_total_not_zero").toggleClass("component-loading-sec",!isExistingUser);
            creditCardBTInstance = new braintreePayment.CreditCard(
                    {
                        onReadyCallback: pageOnLoad,
                        submitCallback: btSubmitCallback,
                        errorCallBack: handleBrainTreeErrors,
                        source: 'billing',
                        clientToken: client_Token,
                        force3dsChallenge: ['Required3DSAuthentication','InvalidTransaction'].indexOf(flashObj && flashObj['errors'] && flashObj['errors']['cc_error']) !== -1
                    }
            );
            creditCardBTInstance.initialize();
        }else{
            pageOnLoad();
        }

        if(is_paypal_ref_txn_error === true && !$('#pay_with_paypal').children().length){
            var paypalRequest = preparePaypalRequest(paypalSuccessCallback,undefined,{label:'pay',amount:paypalTotal});
            paypalSdk.Buttons(paypalRequest).render('#pay_with_paypal');
        }

        if(isMonetateEnabled){
            addDataToMonetate();
        }

        $('#use_my_shipping_address').change(function(){
            if(this.checked){
                populateShippingAddressInBillingAddress();
            } else {
                assignPaymentDetails();
                if(paymentDetails['_id'] ==  undefined || paymentDetails['_id'] == '')
                    populateBillingAddressFields(); // to show billing address fields in edit mode for new user upon clicking check box
                else
                    populateBillingAddress(paymentDetails);
            }
            for(var index in billingAddressFields){
                $('#b_'+billingAddressFields[index]['name']+'Div').removeClass('error');
            }
            fieldLevelErrorType = {};
        });

        try {
              document.getElementById("afterpay_button").addEventListener("click", function() {
                isNCAndPhnoInvalid = !isOnlyMOItemExist && isPhoneInvalid('focusout');
                if(isGuestFlow) {
                  errorFieldsArray = getErrorFields(guestUserBillingAddressFields, billingAddressFieldsTranslated, '', true);
                  isValidationSuccess = $.isEmptyObject(errorFieldsArray);
                  if(isValidationSuccess){
                    afterPayButtonClick();
                  }
                  else{
                    $('#buynow_top_wait_text, #buynow_bottom_wait_text').hide();
                    displayGlobalErrorMessage(true);
                  }
                }else if(isNCAndPhnoInvalid) {
                    $('#phoneNumber').focus();
                }
                else{
                  afterPayButtonClick();
                }
              });
        }
        catch (error) {
        }
    }

                function afterPayButtonClick(){
                    dimOn();
                    var useClearPayObj = ($.inArray(user_info.country, ['FR','IT','DE','IE']) !== -1)
                    if(!useClearPayObj) {
                        $('#total_to_pay').val(total_to_pay_now);
                        AfterPay.initialize({countryCode: (user_info.country === 'UK' ? 'GB' : user_info.country)});
                        AfterPay.open();
                        AfterPay.onComplete = function(event) {
                            if (event.data.status == "SUCCESS") {
                                $('#afterpay_token').val(event.data.orderToken);
                                dimOn();
                                checkForDeliveryDateChange();
                            }
                        }
                    }
                    // Calling AJAX to get token
                    var requestBody = {
                        "context": user_info['context'],
                        "accountId": user_info['account_id'],
                        "orderId": cartData['_id'],
                        "requestAmount": total_to_pay_now,
                        "emailAddress": $('#emailGuest').val(),
                        "returnURL": user_info.cart_url+"/billing?orderId="+cartData['_id']+"&totalToPay="+total_to_pay_now,
                        "cancelURL": user_info.cart_url+"/billing?orderId="+cartData['_id']+"&totalToPay="+total_to_pay_now
                    }
                    new ServiceUtil().getData('getaptoken','POST',{'request': requestBody},
                        function(response){
                            digitalData.event.push({"eventInfo": {"eventName": "thirdPartyPayment","paymentMethod": "AFTERPAY"}});
                            if(useClearPayObj) {
                                Clearpay.redirect({token: response['paymentToken']})
                            } else {
                                dimOff();
                                AfterPay.transfer({token: response['paymentToken']});
                            }
                        },undefined, false, function(){
                            dimOff();
                            if(!useClearPayObj)
                                AfterPay.close();
                            $('#afterpay_error').show().attr('tabindex', '0').focus();
                        });
                  }

    function addDataToMonetate(){
        var monetateDataObject = {};
        monetateDataObject.setPageType = 'billing';
        monetateDataObject.addCartRows = trackMonetateAddCartRows(cart_data);
        // To re-use the monetate from header component, we are calling montetate API only when its loaded from header component
        var sendDataToMonetate = setInterval(function(){
            if(typeof pushMonetateData != "undefined"){
                try{
                    pushMonetateData(monetateDataObject);
                    clearInterval(sendDataToMonetate);
                } catch(e) {
                    clearInterval(sendDataToMonetate);
                    utilObj.logMessage('warn',new errorObject(e,'monetateError'),false);
                }
            }
        },300); // 300 milli seconds
    }
</script>
