import { ArrowRightIcon, GitFork } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { BannerImage } from "@/components/banner-img";

export const HomePage = () => {
  return (
    <div className="space-y-24 flex flex-col items-center">
      <div className="flex flex-col items-center text-center space-y-6">
        <Link to="/docs">
          <Button className="space-x-2" variant="secondary">
            <div>
              New languages supported, themes and more.
            </div>
            <ArrowRightIcon />
          </Button>
        </Link>
        <div className="text-[58px] font-bold leading-10">
          Run and save your code snippets.
        </div>
        <div className="text-[20px] font-light max-w-md">
          Simple and beatifull code editor that enables you to run your snippets
          and get instant feedback.
        </div>
        <div className="flex items-center justify-between space-x-4">
          <Button>
            <Link to="/editor">Get Started</Link>
          </Button>
          <a
            href="https://www.github.com/danimydev/code-runner-ui"
            target="_blank"
          >
            <Button variant="outline" className="space-x-2">
              <GitFork className="w-4 h-4" />
              <div>
                GitHub
              </div>
            </Button>
          </a>
        </div>
      </div>
      <div>
        <BannerImage />
      </div>
    </div>
  );
};
