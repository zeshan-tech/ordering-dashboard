import { ComponentType, MouseEvent } from "react";
import { CircularProgress, IconButton, IconButtonProps, ListItemIcon, SvgIconProps, Tooltip, TooltipProps } from "@mui/material";
import { default as MuiAddOutlinedIcon } from "@mui/icons-material/AddOutlined";
import { default as MuiBrightness4OutlinedIcon } from "@mui/icons-material/Brightness4Outlined";
import { default as MuiChevronRightOutlinedIcon } from "@mui/icons-material/ChevronRightOutlined";
import { default as MuiChevronLeftOutlinedIcon } from "@mui/icons-material/ChevronLeftOutlined";
import { default as MuiComputerOutlinedIcon } from "@mui/icons-material/ComputerOutlined";
import { default as MuiFeedbackOutlinedIcon } from "@mui/icons-material/FeedbackOutlined";
import { default as InsertLinkOutlinedIcon } from "@mui/icons-material/InsertLinkOutlined";
import { default as MuiLightModeOutlinedIcon } from "@mui/icons-material/LightModeOutlined";
import { default as MuiLogoutOutlinedIcon } from "@mui/icons-material/LogoutOutlined";
import { default as MuiMenuOpenOutlinedIcon } from "@mui/icons-material/MenuOpenOutlined";
import { default as MuiNightsStayOutlinedIcon } from "@mui/icons-material/NightsStayOutlined";
import { default as MuiQuestionAnswerOutlinedIcon } from "@mui/icons-material/QuestionAnswerOutlined";
import { default as MuiAirplanemodeActiveOutlinedIcon } from "@mui/icons-material/AirplanemodeActiveOutlined";
import { default as MuiDeleteOutlinedIcon } from "@mui/icons-material/DeleteOutlined";
import { default as MuiOpenInNewOutlinedIcon } from "@mui/icons-material/OpenInNewOutlined";
import { default as MuiRefreshOutlinedIcon } from "@mui/icons-material/RefreshOutlined";
import { default as MuiPreviewOutlinedIcon } from "@mui/icons-material/PreviewOutlined";
import { default as MuiEditOutlinedIcon } from "@mui/icons-material/EditOutlined";
import { default as MuiSelecOutlinedtAll } from "@mui/icons-material/SelectAllOutlined";
import { default as MuiSearchOutlinedIcon } from "@mui/icons-material/SearchOutlined";
import { default as MuiSettingsInputvideoOutlinedIcon } from "@mui/icons-material/SettingsInputSvideoOutlined";
import { default as MuiSlideshowOutlinedIcon } from "@mui/icons-material/SlideshowOutlined";
import { default as MuiSpaceDashboardOutlinedIcon } from "@mui/icons-material/SpaceDashboardOutlined";
import { default as MuiErrorOutlinedIcon } from "@mui/icons-material/ErrorOutlined";
import { default as MuiArrowDropDownOutlinedIcon } from "@mui/icons-material/ArrowDropDownOutlined";
import { default as MuiFileUploadOutlinedIcon } from "@mui/icons-material/FileUploadOutlined";
import { default as MuiSwitchAccountOutlinedIcon } from "@mui/icons-material/SwitchAccountOutlined";
import { default as MuiTimelineOutlinedIcon } from "@mui/icons-material/TimelineOutlined";
import { default as MuiStreetviewOutlinedIcon } from "@mui/icons-material/StreetviewOutlined";
import { default as MuiSaveOutlinedIcon } from "@mui/icons-material/SaveOutlined";
import { default as MuiTranslateOutlinedIcon } from "@mui/icons-material/TranslateOutlined";
import { default as MuiCancelOutlinedIcon } from "@mui/icons-material/CancelOutlined";
import { default as MuiVideoLibraryOutlinedIcon } from "@mui/icons-material/VideoLibraryOutlined";
import { default as MuiClearOutlinedIcon } from "@mui/icons-material/ClearOutlined";
import { default as MuiFastForwardOutlinedIcon } from "@mui/icons-material/FastForwardOutlined";
import { default as MuiPlayArrowOutlinedIcon } from "@mui/icons-material/PlayArrowOutlined";
import { default as MuiFastRewindOutlinedIcon } from "@mui/icons-material/FastRewindOutlined";
import { default as MuiCachedOutlinedIcon } from "@mui/icons-material/CachedOutlined";
import { default as MuiRadioButtonUncheckedOutlinedIcon } from "@mui/icons-material/RadioButtonUncheckedOutlined";
import { default as MuiLibraryAddCheckOutlinedIcon } from "@mui/icons-material/LibraryAddCheckOutlined";
import { default as MuiMoreVertOutlinedIcon } from "@mui/icons-material/MoreVertOutlined";
import { default as MuiRadioButtonCheckedOutlinedIcon } from "@mui/icons-material/RadioButtonCheckedOutlined";
import { default as MuiCheckBoxOutlinedIcon } from "@mui/icons-material/CheckBoxOutlined";
import { default as MuiSignalCellularAlt1BarOutlinedIcon } from "@mui/icons-material/SignalCellularAlt1BarOutlined";
import { default as MuiAttachFileOutlinedIcon } from "@mui/icons-material/AttachFileOutlined";
import { default as MuiDoneOutlinedIcon } from "@mui/icons-material/DoneOutlined";
import { default as MuiAddCircleOutlinedIcon } from "@mui/icons-material/AddCircleOutlined";
import { default as MuiDetOutlinedails } from "@mui/icons-material/DetailsOutlined";
import { default as MuiEventOutlinedIcon } from "@mui/icons-material/Event";
import { default as MuiInfodOutlinedIcon } from "@mui/icons-material/InfoOutlined";
import { default as MuiSdOutlinedIcon } from "@mui/icons-material/SdOutlined";
import { default as AttachMoneyOutlinedIcon } from "@mui/icons-material/AttachMoneyOutlined";
import { default as MuiReportProblemOutlineIcon } from "@mui/icons-material/ReportProblemOutlined";
import { default as MuiCheckOutlineIcon } from "@mui/icons-material/CheckOutlined";
import { default as MuiStopOutlinedIcon } from "@mui/icons-material/StopOutlined";
import { default as MuiHourglassFullOutlinedIcon } from "@mui/icons-material/HourglassFullOutlined";
import { default as MuiNewReleasesOutlinedIcon } from "@mui/icons-material/NewReleasesOutlined";
import { default as MuiCheckCircleOutlineIcon } from "@mui/icons-material/CheckCircleOutline";
import { default as MuiViewStreamOutlineIcon } from "@mui/icons-material/ViewStreamOutlined";
import { default as MuiInboxIconOutlined } from "@mui/icons-material/InboxOutlined";
import { default as MuiStoreOutlineIcon } from "@mui/icons-material/StoreOutlined";
import { default as MuiPersonOutlineIcon } from "@mui/icons-material/PersonOutline";
import { default as MuiWebOutlineIcon } from "@mui/icons-material/WebOutlined";
import { default as MuiFacebookOutlineIcon } from "@mui/icons-material/FacebookOutlined";
import { default as MuiShoppingBagOutlineIcon } from "@mui/icons-material/ShoppingBagOutlined";
import { default as MuiContentCopyOutlinedIcon } from "@mui/icons-material/ContentCopyOutlined";
import { default as MuiWidgetsOutlinedIcon } from "@mui/icons-material/WidgetsOutlined";

import { default as MuiWidgetsIcon } from "@mui/icons-material/Widgets";
import { default as MuiContentCopyIcon } from "@mui/icons-material/ContentCopy";
import { default as MuiShoppingBagIcon } from "@mui/icons-material/ShoppingBag";
import { default as MuiMicrosoftIcon } from "@mui/icons-material/Microsoft";
import { default as MuiGoogleIcon } from "@mui/icons-material/Google";
import { default as MuiFacebookIcon } from "@mui/icons-material/Facebook";
import { default as MuiWebIcon } from "@mui/icons-material/Web";
import { default as MuiPersonIcon } from "@mui/icons-material/Person";
import { default as MuiStoreIcon } from "@mui/icons-material/Category";
import { default as MuiInboxIcon } from "@mui/icons-material/Inbox";
import { default as MuiViewStreamIcon } from "@mui/icons-material/ViewStream";
import { default as MuiAddIcon } from "@mui/icons-material/Add";
import { default as MuiBrightness4Icon } from "@mui/icons-material/Brightness4";
import { default as MuiChevronRightIcon } from "@mui/icons-material/ChevronRight";
import { default as MuiChevronLeftIcon } from "@mui/icons-material/ChevronLeft";
import { default as MuiComputerIcon } from "@mui/icons-material/Computer";
import { default as MuiFeedbackIcon } from "@mui/icons-material/Feedback";
import { default as InsertLinkIcon } from "@mui/icons-material/InsertLink";
import { default as MuiLightModeIcon } from "@mui/icons-material/LightMode";
import { default as MuiLogoutIcon } from "@mui/icons-material/Logout";
import { default as MuiMenuOpenIcon } from "@mui/icons-material/MenuOpen";
import { default as MuiNightsStayIcon } from "@mui/icons-material/NightsStay";
import { default as MuiQuestionAnswerIcon } from "@mui/icons-material/QuestionAnswer";
import { default as MuiAirplanemodeActiveIcon } from "@mui/icons-material/AirplanemodeActive";
import { default as MuiDeleteIcon } from "@mui/icons-material/Delete";
import { default as MuiOpenInNewIcon } from "@mui/icons-material/OpenInNew";
import { default as MuiRefreshIcon } from "@mui/icons-material/Refresh";
import { default as MuiPreviewIcon } from "@mui/icons-material/Preview";
import { default as MuiEditIcon } from "@mui/icons-material/Edit";
import { default as MuiSelectAll } from "@mui/icons-material/SelectAll";
import { default as MuiSearchIcon } from "@mui/icons-material/Search";
import { default as MuiSettingsInputvideoIcon } from "@mui/icons-material/SettingsInputSvideo";
import { default as MuiSlideshowIcon } from "@mui/icons-material/Slideshow";
import { default as MuiSpaceDashboardIcon } from "@mui/icons-material/SpaceDashboard";
import { default as MuiErrorIcon } from "@mui/icons-material/Error";
import { default as MuiArrowDropDownIcon } from "@mui/icons-material/ArrowDropDown";
import { default as MuiFileUploadIcon } from "@mui/icons-material/FileUpload";
import { default as MuiSwitchAccountIcon } from "@mui/icons-material/SwitchAccount";
import { default as MuiTimelineIcon } from "@mui/icons-material/Timeline";
import { default as MuiStreetviewIcon } from "@mui/icons-material/Streetview";
import { default as MuiSaveIcon } from "@mui/icons-material/Save";
import { default as MuiTranslateIcon } from "@mui/icons-material/Translate";
import { default as MuiCancelIcon } from "@mui/icons-material/Cancel";
import { default as MuiVideoLibraryIcon } from "@mui/icons-material/VideoLibrary";
import { default as MuiClearIcon } from "@mui/icons-material/Clear";
import { default as MuiFastForwardIcon } from "@mui/icons-material/FastForward";
import { default as MuiPlayArrowIcon } from "@mui/icons-material/PlayArrow";
import { default as MuiFastRewindIcon } from "@mui/icons-material/FastRewind";
import { default as MuiCachedIcon } from "@mui/icons-material/Cached";
import { default as MuiRadioButtonUncheckedIcon } from "@mui/icons-material/RadioButtonUnchecked";
import { default as MuiLibraryAddCheckIcon } from "@mui/icons-material/LibraryAddCheck";
import { default as MuiMoreVertIcon } from "@mui/icons-material/MoreVert";
import { default as MuiRadioButtonCheckedIcon } from "@mui/icons-material/RadioButtonChecked";
import { default as MuiCheckBoxIcon } from "@mui/icons-material/CheckBox";
import { default as MuiSignalCellularAlt1BarIcon } from "@mui/icons-material/SignalCellularAlt1Bar";
import { default as MuiAttachFileIcon } from "@mui/icons-material/AttachFile";
import { default as MuiDoneIcon } from "@mui/icons-material/Done";
import { default as MuiAddCircleIcon } from "@mui/icons-material/AddCircle";
import { default as MuiDetails } from "@mui/icons-material/Details";
import { default as MuiEventIcon } from "@mui/icons-material/Event";
import { default as MuiInfodIcon } from "@mui/icons-material/Info";
import { default as MuiSdIcon } from "@mui/icons-material/Sd";
import { default as MuiAddPhotoAlternateOutlinedIcon } from "@mui/icons-material/AddPhotoAlternateOutlined";
import { default as MuiAddPhotoAlternateIcon } from "@mui/icons-material/AddPhotoAlternate";
import { default as AttachMoneyIcon } from "@mui/icons-material/AttachMoney";
import { default as MuiReportProblemIcon } from "@mui/icons-material/ReportProblem";
import { default as MuiCheckIcon } from "@mui/icons-material/Check";
import { default as MuiStopIcon } from "@mui/icons-material/Stop";
import { default as MuiHourglassFullIcon } from "@mui/icons-material/HourglassFull";
import { default as MuiNewReleasesIcon } from "@mui/icons-material/NewReleases";
import { default as MuiCheckCircleIcon } from "@mui/icons-material/CheckCircle";

export interface IconWrapperProps extends SvgIconProps {
  iconButton?: boolean;
  disableRipple?: boolean;
  tooltip?: string;
  onClick?: (e: MouseEvent<EventTarget>) => void;
  tooltipPlacement?: TooltipProps["placement"];
  isListIcon?: boolean;
  iconButtonProps?: IconButtonProps;
  loading?: boolean;
  disabled?: boolean;
  solid?: boolean;
}

const withIconWrapper = (WrappedOutlinedIcon: ComponentType<IconWrapperProps>, WrappedSolidIcon: ComponentType<IconWrapperProps>) => {
  return ({ onClick, disableRipple, isListIcon, tooltip, tooltipPlacement, iconButton, iconButtonProps, loading, disabled, sx, solid, ...restProps }: IconWrapperProps) => {
    const renderIcon = () => (solid ? <WrappedSolidIcon {...restProps} /> : <WrappedOutlinedIcon {...restProps} />);

    if (isListIcon) {
      return <ListItemIcon sx={sx}>{renderIcon()}</ListItemIcon>;
    }

    if ((onClick || iconButton) && iconButton !== false) {
      return (
        <IconButton disableRipple={disableRipple} sx={sx} disabled={loading || disabled} onClick={onClick} color='inherit' {...iconButtonProps}>
          <Tooltip title={tooltip} placement={tooltipPlacement}>
            {loading ? <CircularProgress size={25} /> : renderIcon()}
          </Tooltip>
        </IconButton>
      );
    }

    return (
      <Tooltip title={tooltip} placement={tooltipPlacement} sx={sx} onClick={onClick}>
        {loading ? <CircularProgress size={25} /> : renderIcon()}
      </Tooltip>
    );
  };
};

export const AddIcon = withIconWrapper(MuiAddOutlinedIcon, MuiAddIcon);
export const MenuOpenIcon = withIconWrapper(MuiMenuOpenOutlinedIcon, MuiMenuOpenIcon);
export const SearchIcon = withIconWrapper(MuiSearchOutlinedIcon, MuiSearchIcon);
export const MoonSunIcon = withIconWrapper(MuiBrightness4OutlinedIcon, MuiBrightness4Icon);
export const DashboardIcon = withIconWrapper(MuiSpaceDashboardOutlinedIcon, MuiSpaceDashboardIcon);
export const AnalyticsIcon = withIconWrapper(MuiTimelineOutlinedIcon, MuiTimelineIcon);
export const PlaySquareIcon = withIconWrapper(MuiSlideshowOutlinedIcon, MuiSlideshowIcon);
export const PlayDoubleIcon = withIconWrapper(MuiVideoLibraryOutlinedIcon, MuiVideoLibraryIcon);
export const LinkIcon = withIconWrapper(InsertLinkOutlinedIcon, InsertLinkIcon);
export const SettingIcon = withIconWrapper(MuiSettingsInputvideoOutlinedIcon, MuiSettingsInputvideoIcon);
export const QuestionAnswerIcon = withIconWrapper(MuiQuestionAnswerOutlinedIcon, MuiQuestionAnswerIcon);
export const SwitchAccountIcon = withIconWrapper(MuiSwitchAccountOutlinedIcon, MuiSwitchAccountIcon);
export const LogoutIcon = withIconWrapper(MuiLogoutOutlinedIcon, MuiLogoutIcon);
export const MoonIcon = withIconWrapper(MuiNightsStayOutlinedIcon, MuiNightsStayIcon);
export const FeedbackIcon = withIconWrapper(MuiFeedbackOutlinedIcon, MuiFeedbackIcon);
export const ChevronRightIcon = withIconWrapper(MuiChevronRightOutlinedIcon, MuiChevronRightIcon);
export const ChevronLeftIcon = withIconWrapper(MuiChevronLeftOutlinedIcon, MuiChevronLeftIcon);
export const LightModeIcon = withIconWrapper(MuiLightModeOutlinedIcon, MuiLightModeIcon);
export const LaptopIcon = withIconWrapper(MuiComputerOutlinedIcon, MuiComputerIcon);
export const UploadIcon = withIconWrapper(MuiFileUploadOutlinedIcon, MuiFileUploadIcon);
export const AirplaneIcon = withIconWrapper(MuiAirplanemodeActiveOutlinedIcon, MuiAirplanemodeActiveIcon);
export const ClearIcon = withIconWrapper(MuiClearOutlinedIcon, MuiClearIcon);
export const TranslateIcon = withIconWrapper(MuiTranslateOutlinedIcon, MuiTranslateIcon);
export const FastForwardIcon = withIconWrapper(MuiFastForwardOutlinedIcon, MuiFastForwardIcon);
export const FastRewindIcon = withIconWrapper(MuiFastRewindOutlinedIcon, MuiFastRewindIcon);
export const PlayArrowIcon = withIconWrapper(MuiPlayArrowOutlinedIcon, MuiPlayArrowIcon);
export const CachedIcon = withIconWrapper(MuiCachedOutlinedIcon, MuiCachedIcon);
export const RadioButtonUncheckedIcon = withIconWrapper(MuiRadioButtonUncheckedOutlinedIcon, MuiRadioButtonUncheckedIcon);
export const RadioButtonCheckedIcon = withIconWrapper(MuiRadioButtonCheckedOutlinedIcon, MuiRadioButtonCheckedIcon);
export const MoreVertIcon = withIconWrapper(MuiMoreVertOutlinedIcon, MuiMoreVertIcon);
export const ErrorIcon = withIconWrapper(MuiErrorOutlinedIcon, MuiErrorIcon);
export const SaveIcon = withIconWrapper(MuiSaveOutlinedIcon, MuiSaveIcon);
export const DeleteIcon = withIconWrapper(MuiDeleteOutlinedIcon, MuiDeleteIcon);
export const EditIcon = withIconWrapper(MuiEditOutlinedIcon, MuiEditIcon);
export const SelectAllIcon = withIconWrapper(MuiSelecOutlinedtAll, MuiSelectAll);
export const SignalBarIcon = withIconWrapper(MuiSignalCellularAlt1BarOutlinedIcon, MuiSignalCellularAlt1BarIcon);
export const DoneIcon = withIconWrapper(MuiDoneOutlinedIcon, MuiDoneIcon);
export const CaretDownIcon = withIconWrapper(MuiArrowDropDownOutlinedIcon, MuiArrowDropDownIcon);
export const CancelCircleIcon = withIconWrapper(MuiCancelOutlinedIcon, MuiCancelIcon);
export const StreetViewIcon = withIconWrapper(MuiStreetviewOutlinedIcon, MuiStreetviewIcon);
export const AttachFileIcon = withIconWrapper(MuiAttachFileOutlinedIcon, MuiAttachFileIcon);
export const CheckBoxIcon = withIconWrapper(MuiCheckBoxOutlinedIcon, MuiCheckBoxIcon);
export const RefreshIcon = withIconWrapper(MuiRefreshOutlinedIcon, MuiRefreshIcon);
export const OpenTabIcon = withIconWrapper(MuiOpenInNewOutlinedIcon, MuiOpenInNewIcon);
export const PreviewIcon = withIconWrapper(MuiPreviewOutlinedIcon, MuiPreviewIcon);
export const MultiCheckIcon = withIconWrapper(MuiLibraryAddCheckOutlinedIcon, MuiLibraryAddCheckIcon);
export const AddCircleIcon = withIconWrapper(MuiAddCircleOutlinedIcon, MuiAddCircleIcon);
export const DetailsIcon = withIconWrapper(MuiDetOutlinedails, MuiDetails);
export const InfoIcon = withIconWrapper(MuiInfodOutlinedIcon, MuiInfodIcon);
export const EventIcon = withIconWrapper(MuiEventOutlinedIcon, MuiEventIcon);
export const SdIcon = withIconWrapper(MuiSdOutlinedIcon, MuiSdIcon);
export const AddImageIcon = withIconWrapper(MuiAddPhotoAlternateOutlinedIcon, MuiAddPhotoAlternateIcon);
export const DollarIcon = withIconWrapper(AttachMoneyOutlinedIcon, AttachMoneyIcon);
export const ProblemIcon = withIconWrapper(MuiReportProblemOutlineIcon, MuiReportProblemIcon);
export const CheckIcon = withIconWrapper(MuiCheckOutlineIcon, MuiCheckIcon);
export const StopIcon = withIconWrapper(MuiStopOutlinedIcon, MuiStopIcon);
export const HourglassIcon = withIconWrapper(MuiHourglassFullOutlinedIcon, MuiHourglassFullIcon);
export const NewReleasesIcon = withIconWrapper(MuiNewReleasesOutlinedIcon, MuiNewReleasesIcon);
export const CheckCircleIcon = withIconWrapper(MuiCheckCircleOutlineIcon, MuiCheckCircleIcon);
export const ViewStreamIcon = withIconWrapper(MuiViewStreamOutlineIcon, MuiViewStreamIcon);
export const InboxIcon = withIconWrapper(MuiInboxIconOutlined, MuiInboxIcon);
export const StoreIcon = withIconWrapper(MuiStoreOutlineIcon, MuiStoreIcon);
export const PersonIcon = withIconWrapper(MuiPersonOutlineIcon, MuiPersonIcon);
export const WebIcon = withIconWrapper(MuiWebOutlineIcon, MuiWebIcon);
export const MicrosoftIcon = withIconWrapper(MuiMicrosoftIcon, MuiMicrosoftIcon);
export const GoogleIcon = withIconWrapper(MuiGoogleIcon, MuiGoogleIcon);
export const FacebookIcon = withIconWrapper(MuiFacebookOutlineIcon, MuiFacebookIcon);
export const ShoppingBagIcon = withIconWrapper(MuiShoppingBagOutlineIcon, MuiShoppingBagIcon);
export const ContentCopyIcon = withIconWrapper(MuiContentCopyOutlinedIcon, MuiContentCopyIcon);
export const WidgetsIcon = withIconWrapper(MuiWidgetsOutlinedIcon, MuiWidgetsIcon);
