import { siteConfig } from "@/config";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center items-center pt-4 pb-20 space-x-3 ">
        <span className="text-mute text-xs">
          {`© ${new Date().getFullYear()}`} {siteConfig.author.name}
        </span>
      </div>
    </footer>
  );
}
