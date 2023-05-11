import React from "react";
import { Article as ArticleComponent } from "../Article";

import { ISingleArticle } from "../../../data/mock";

const FirstArticle = ({ article }: ISingleArticle) => {
  return (
    <>
      {" "}
      <ArticleComponent.Root>
        <ArticleComponent.Title paragraphText={article.head.title} />
        <ArticleComponent.PrincipalSection
          paragraphText={article.text.textPrincipal.text}
        />
        {article.image.imageSrc ? (
          <ArticleComponent.ImageRetract src={article.image.imageSrc} />
        ) : null}
        {article.text.textSecondary ? (
          <ArticleComponent.SecondarySection
            paragraphText={article.text.textSecondary.text}
          />
        ) : null}
        {article.video.srcVideo ? (
          <ArticleComponent.Video
            srcVideo={article.video.srcVideo}
            dateVideo={article.video.dateVideo}
            descriptionVideo={article.video.descriptionVideo}
            titleVideo={article.video.titleVideo}
          />
        ) : null}
        {article.text.textLeft || article.text.textRight ? (
          <ArticleComponent.ContainerLeftAndRightContent
            leftSection={article.text.textLeft ?? null}
            rightSection={article.text.textRight ?? null}
          />
        ) : null}
      </ArticleComponent.Root>
    </>
  );
};

export default FirstArticle;
