import { useRecoilCallback } from "recoil";
import { useRouter } from "next/router";
import { PageConst } from "@/constants/pages.constant";
import { postSignOut } from "@/api/auth/post-sign-out.api";

export const useOnSignOutApp = () => {
  const router = useRouter();

  const onSignOutApp = useRecoilCallback(
    () => async () => {
      try {
        await postSignOut();
      } finally {
        router.push(PageConst.Welcome);

        // TODO: Should set a snackbar for a reason.
      }
    },
    [router],
  );

  return onSignOutApp;
};
