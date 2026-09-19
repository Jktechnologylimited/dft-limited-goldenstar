import { LogoLoader } from "@/components/shared/logo-loader";

export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <LogoLoader size="lg" label="Loading D.F.T Limited" />
    </div>
  );
}
