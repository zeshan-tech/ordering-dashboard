import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardMedia, Stack, SxProps, Typography } from "@mui/material";
import { format } from "date-fns";
import FinancialInfoCreatePopper from "./FinancialInfoCreatePopper";

import { AddIcon, CachedIcon } from "@/components/icons";
import { DEFAULT_DATE_FORMAT } from "@/mock/constants";
import useThemeStyles from "@/theme/hooks/useThemeStyles";
import { handleOnTruncateText } from "@/utils";

import { useGetSeriesDetailsById } from "../hooks";

import { SeriesDetailsCardSkeleton } from ".";
import Button from "@/components/Button";
import { ErrorCard } from "@/components/Cards";

interface SeriesDetailsCardProps {
  seriesId: string;
}

export default function SeriesDetailsCard({ seriesId }: SeriesDetailsCardProps) {
  const { t } = useTranslation();
  const [financialInfoCreateMolalAnchorEl, setFinancialInfoCreateMolalAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { data: seriesDetailsData, refetch: seriesDetailsRefetch, isLoading: isSeriesDetailsLoading, error: seriesDetailsError } = useGetSeriesDetailsById({ SeriesId: seriesId });

  const cardStyle: SxProps = {
    position: "relative",
  };

  const cardMediaStyle = useThemeStyles<SxProps>((theme) => ({
    minHeight: theme.spacing(32),
    backgroundSize: "cover",
  }));

  if (isSeriesDetailsLoading) {
    return <SeriesDetailsCardSkeleton />;
  }

  if (seriesDetailsError) {
    return <ErrorCard errorMessage={seriesDetailsError.message} action={<CachedIcon onClick={() => seriesDetailsRefetch()} />} />;
  }

  const renderEditableText = (label: string, value: string | number) => (
    <Stack direction="row" justifyContent="space-between" p={1} alignItems="end" >
      <Typography variant="h6">{label}</Typography>
      <Typography>{value}</Typography>
    </Stack>
  );

  return (
    <Card sx={cardStyle}>
      <CardHeader action={<CachedIcon onClick={() => seriesDetailsRefetch()} />} />

      <CardMedia sx={cardMediaStyle} image={seriesDetailsData?.imageUrl} />

      <CardContent>
        <Typography variant="h5" py={1}>
          {t("Feature.Series.SeriesDetailsCard.seriesDetails")}
        </Typography>
        {renderEditableText(t("Feature.Series.SeriesDetailsCard.title"), seriesDetailsData?.title)}
        {renderEditableText(t("Feature.Series.SeriesDetailsCard.plotSummary"), handleOnTruncateText(seriesDetailsData?.plotSummary ?? "", 20))}
        {renderEditableText(t("Feature.Series.SeriesDetailsCard.releaseDate"), format(seriesDetailsData?.releaseDate ?? new Date(), DEFAULT_DATE_FORMAT))}
        <Typography variant="h5" py={1}>
          {t("Feature.Series.SeriesDetailsCard.additionalInfo")}
        </Typography>
        {renderEditableText(t("Feature.Series.SeriesDetailsCard.genre"), seriesDetailsData?.genre)}
        {renderEditableText(t("Feature.Series.SeriesDetailsCard.originCountry"), seriesDetailsData?.originCountry)}
        {renderEditableText(t("Feature.Series.SeriesDetailsCard.originalLanguage"), seriesDetailsData?.originalLanguage)}
        {renderEditableText(t("Feature.Series.SeriesDetailsCard.status"), seriesDetailsData?.status)}

        <Stack direction={"row"} justifyContent={"space-between"} py={1}>
          <Typography variant="h5">{t("Feature.Series.SeriesDetailsCard.financialInfo")}</Typography>
          {!seriesDetailsData?.netProfit && seriesDetailsData?.netProfit !== 0 ? (
            <Button endIcon={<AddIcon />} onClick={(e) => setFinancialInfoCreateMolalAnchorEl(e.currentTarget)}>
              {t("Feature.Series.SeriesDetailsCard.add")}
            </Button>
          ) : null}
        </Stack>
        {seriesDetailsData?.netProfit || seriesDetailsData?.netProfit === 0 ? (
          <>
            {renderEditableText(t("Feature.Series.SeriesDetailsCard.netProfit"), `${seriesDetailsData.netProfit} $`)}
            {renderEditableText(t("Feature.Series.SeriesDetailsCard.revenue"), `${seriesDetailsData.revenue} $`)}
            {renderEditableText(t("Feature.Series.SeriesDetailsCard.budget"), `${seriesDetailsData.budget} $`)}
          </>
        ) : null}
        <FinancialInfoCreatePopper onSuccess={() => seriesDetailsRefetch()} seriesId={seriesId} anchorEl={financialInfoCreateMolalAnchorEl} onClose={() => setFinancialInfoCreateMolalAnchorEl(null)} />
      </CardContent>
    </Card>
  );
}
