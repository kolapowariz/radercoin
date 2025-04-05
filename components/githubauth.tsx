import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";
import { Github } from "lucide-react";

export default function GitHubAuth() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/dashboard" });
      }}
      className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md w-full flex items-center justify-center"
    >
      <Button
        type="submit"
        className="cursor-pointer w-full flex items-center justify-center gap-2 py-2 px-4 text-white bg-black dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 rounded-lg transition duration-300"
      >
        <Github className="w-5 h-5" />
        Sign in with GitHub
      </Button>
    </form>
  );
}
