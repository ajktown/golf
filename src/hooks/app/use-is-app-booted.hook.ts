import { isAppBootedSelector } from "@/recoil/app/app.state";
import { useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import { DEFAULT_MAIN_APP_PAGE } from "@/constants/pages.constant";
import { useOnSignOutApp } from "./use-on-sign-out-app.hook";
import { useAuthPrep } from "../auth/use-auth-prep.hook";

export const useIsAppBooted = (): boolean => {
  const isBooted = useRecoilValue(isAppBootedSelector);
  const onSignOutApp = useOnSignOutApp();
  const onGetAuthPrep = useAuthPrep();
  const router = useRouter();

  const onAppBooting = useCallback(async () => {
    try {
      // TODO: Use const isSignedIn = useRecoilValue(isSignedInSelector) instead
      const isSignedIn = (await onGetAuthPrep())?.isSignedIn;

      // If user is not signed in at this point, it should be an error.
      if (!isSignedIn) throw new Error(`Not Signed In`);

      router.push(DEFAULT_MAIN_APP_PAGE);
    } catch {
      await onSignOutApp();
    }
  }, [onGetAuthPrep, onSignOutApp, router]);

  useEffect(() => {
    if (isBooted) return;
    onAppBooting();
  }, [isBooted, onAppBooting]);

  return isBooted;
};
