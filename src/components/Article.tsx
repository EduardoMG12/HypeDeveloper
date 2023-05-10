import React, { FC, ReactNode } from "react";
import ImageNext from "next/image";

interface IPropsChildren {
  children: ReactNode;
}

const Root: FC<IPropsChildren> = ({ children }) => {
  return <div>{children}</div>;
};

Root.displayName = "Article.Root";

interface IPropsParagraphText {
  paragraphText: string;
}

const Title: FC<IPropsParagraphText> = ({ paragraphText }) => {
  return (
    <div className="pb-10">
      <h2 className="text-3xl">{paragraphText}</h2>
    </div>
  );
};

Root.displayName = "ArticleComponent.Title";

const PrincipalSection: FC<IPropsParagraphText> = ({ paragraphText }) => {
  return (
    <div>
      <p>{paragraphText}</p>
    </div>
  );
};

Root.displayName = "Article.PrincipalSection";

interface IPropsImage {
  src: string;
  alt?: string;
  widthImage?: number;
  heightImage?: number;
}
const ImageRetract: FC<IPropsImage> = ({
  src,
  alt,
  widthImage,
  heightImage,
}) => {
  return (
    <div className="flex items-center justify-center">
      <ImageNext
        src={src}
        alt={alt ?? "imagem referente ao artigo"}
        width={widthImage ? widthImage : 500}
        height={heightImage ? heightImage : 500}
      />
    </div>
  );
};
Root.displayName = "Article.ImageRetract";

const Image: FC<IPropsImage> = ({ src, alt, widthImage, heightImage }) => {
  return (
    <div className="flex items-center justify-center">
      <ImageNext
        src={src}
        alt={alt ?? "imagem referente ao artigo"}
        width={widthImage ? widthImage : 500}
        height={heightImage ? heightImage : 281}
        fill={true}
      />
    </div>
  );
};
Root.displayName = "Article.Image";

interface IPropsVideo {
  srcVideo: string;
  heightVideo?: string;
  widthVideo?: string;
  titleVideo?: string;
  descriptionVideo?: string;
  dateVideo?: string;
}

const Video: FC<IPropsVideo> = ({
  srcVideo,
  heightVideo,
  widthVideo,
  titleVideo,
  dateVideo,
  descriptionVideo,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-5 pt-8">
      <h3 className="text-xl">{titleVideo ?? null}</h3>
      <p className="text-sm">{descriptionVideo ?? null}</p>
      <p className="text-xs">{dateVideo ?? null}</p>
      <iframe
        width={widthVideo ?? `640`}
        height={heightVideo ?? `360`}
        src={srcVideo}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
Root.displayName = "Article.Video";

const SecondarySection: FC<IPropsParagraphText> = ({ paragraphText }) => {
  return (
    <div>
      <p>{paragraphText}</p>
    </div>
  );
};
Root.displayName = "Article.SecondarySection";

interface IPropsContainerLeftAndRight {
  leftSection?: ReactNode;
  rightSection?: ReactNode;
}

const ContainerLeftAndRightContent: FC<IPropsContainerLeftAndRight> = ({
  leftSection,
  rightSection,
}) => {
  return (
    <div className="flex justify-between w-full">
      {leftSection}
      {rightSection}
    </div>
  );
};

Root.displayName = "Article.ContainerLeftAndRight";

const LeftContent: FC<IPropsParagraphText> = ({ paragraphText }) => {
  return (
    <div className="w-2/5">
      <p>{paragraphText}</p>
    </div>
  );
};

Root.displayName = "Article.LeftContent";

const RightContent: FC<IPropsParagraphText> = ({ paragraphText }) => {
  return (
    <div className="w-2/5">
      <p>{paragraphText}</p>
    </div>
  );
};

Root.displayName = "Article.RightContent";

export const Article = {
  Root,
  Title,
  PrincipalSection,
  ImageRetract,
  Image,
  Video,
  SecondarySection,
  ContainerLeftAndRightContent,
  LeftContent,
  RightContent,
};
