"use client";

import * as React from "react";
import Link from "next/link";
import { useLocale } from "@/context/locale-context";
import { Play, ChevronLeft, ChevronRight, Video } from "lucide-react";
import { videos } from "@/lib/data/videos";
import { Card, CardContent } from "@/components/design-system/Card";
import { Badge } from "@/components/design-system/Badge";
import { Button } from "@/components/design-system/Button";

export function VideosSection() {
  const locale = useLocale();
  const isFrench = locale.locale === "fr" || locale.locale === "be_fr" || locale.locale === "ch_fr";
  const [videoIndex, setVideoIndex] = React.useState(0);

  const prevVideo = () => setVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  const nextVideo = () => setVideoIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">
            {isFrench ? "À regarder" : "To watch"}
          </h2>
          <Link
            href={`/${locale.locale}/videos`}
            className="text-[#0055A4] hover:underline text-sm"
          >
            {isFrench ? "Voir tout" : "See all"}
          </Link>
        </div>
        <div className="relative">
          <Card className="bg-gray-100 text-gray-900 overflow-hidden border border-gray-200">
            <div className="flex flex-col md:flex-row">
              <div className="relative bg-gray-200 aspect-video md:aspect-auto md:w-1/2 flex items-center justify-center">
                <Video className="h-16 w-16 text-gray-400" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#0055A4]/80 rounded-full p-4">
                    <Play className="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-2 text-gray-700 border-gray-400">
                  {videos[videoIndex].type}
                </Badge>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  {isFrench ? videos[videoIndex].title : videos[videoIndex].titleEn}
                </h3>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={prevVideo}>
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <span className="text-sm text-gray-500">
                    {videoIndex + 1} / {videos.length}
                  </span>
                  <Button variant="ghost" size="icon" onClick={nextVideo}>
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
          {videos.slice(0, 6).map((video, index) => (
            <Link key={index} href={`/${locale.locale}${video.href}`} className="shrink-0 w-32">
              <Card className="hover:shadow-md cursor-pointer">
                <CardContent className="p-2">
                  <div className="bg-gray-200 border-2 border-dashed rounded-md w-full aspect-video flex items-center justify-center mb-2">
                    <Video className="h-6 w-6 text-gray-400" />
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {isFrench ? video.title : video.titleEn}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
