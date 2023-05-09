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
    <div>
      <h2>{paragraphText}</h2>
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
  width?: string;
}
const Image: FC<IPropsImage> = ({ src, alt, width }) => {
  return (
    <div>
      <ImageNext
        src={src}
        alt={alt ?? "imagem referente ao artigo"}
        className={width ? `w-[${width}]` : "80%"}
      />
    </div>
  );
};
Root.displayName = "Article.Image";

interface IPropsVideo {
  src: string;
  height?: string;
  width?: string;
}

const Video: FC<IPropsVideo> = ({ src, height, width }) => {
  return (
    <div>
      <video width={width ?? `560`} height={height ?? `315`} controls>
        <source src={src} type="video/mp4" />
      </video>
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
    <div className="flex justify-between">
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
  Image,
  Video,
  SecondarySection,
  ContainerLeftAndRightContent,
  LeftContent,
  RightContent,
};
