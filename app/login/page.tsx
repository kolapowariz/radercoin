import GitHubAuth from "@/components/githubauth";
import GoogleAuth from "@/components/googleauth";

export default function SignIn() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Sign in to ZortApp
      </h2>
      <div className="space-y-4 w-full max-w-xs">
        <GitHubAuth />
        <GoogleAuth />
      </div>
    </div>
  );
}
