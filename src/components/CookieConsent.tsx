import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [showPreferences, setShowPreferences] = useState(false);

  const handleAcceptAll = () => {
    setShowBanner(false);
    // Set all cookies to accepted
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      functional: true,
      analytics: true,
      performance: true,
      advertisement: true
    }));
  };

  const handleRejectAll = () => {
    setShowBanner(false);
    // Set only necessary cookies
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      functional: false,
      analytics: false,
      performance: false,
      advertisement: false
    }));
  };

  const handleCustomize = () => {
    setShowPreferences(true);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-strong p-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex-1 space-y-2">
              <h3 className="font-semibold text-foreground">We value your privacy</h3>
              <p className="text-muted-foreground text-sm">
                We use cookies to enhance your browsing experience, serve personalised ads or content, 
                and analyse our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCustomize}
              >
                Customise
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRejectAll}
              >
                Reject All
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={handleAcceptAll}
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Dialog */}
      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              Customise Consent Preferences
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowPreferences(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <p className="text-muted-foreground text-sm">
              We use cookies to help you navigate efficiently and perform certain functions. 
              You will find detailed information about all cookies under each consent category below.
            </p>

            {/* Cookie Categories */}
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Necessary</h4>
                  <span className="text-sm text-green-600 font-medium">Always Active</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Necessary cookies are required to enable the basic features of this site, 
                  such as providing secure log-in or adjusting your consent preferences. 
                  These cookies do not store any personally identifiable data.
                </p>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-semibold mb-2">Functional</h4>
                <p className="text-sm text-muted-foreground">
                  Functional cookies help perform certain functionalities like sharing the content 
                  of the website on social media platforms, collecting feedback, and other third-party features.
                </p>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-semibold mb-2">Analytics</h4>
                <p className="text-sm text-muted-foreground">
                  Analytical cookies are used to understand how visitors interact with the website. 
                  These cookies help provide information on metrics such as the number of visitors, 
                  bounce rate, traffic source, etc.
                </p>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-semibold mb-2">Performance</h4>
                <p className="text-sm text-muted-foreground">
                  Performance cookies are used to understand and analyse the key performance indexes 
                  of the website which helps in delivering a better user experience for the visitors.
                </p>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-semibold mb-2">Advertisement</h4>
                <p className="text-sm text-muted-foreground">
                  Advertisement cookies are used to provide visitors with customised advertisements 
                  based on the pages you visited previously and to analyse the effectiveness of the ad campaigns.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
              <Button
                variant="outline"
                onClick={handleRejectAll}
                className="flex-1"
              >
                Reject All
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowPreferences(false)}
                className="flex-1"
              >
                Save My Preferences
              </Button>
              <Button
                variant="default"
                onClick={handleAcceptAll}
                className="flex-1"
              >
                Accept All
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;