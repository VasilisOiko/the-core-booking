import type { ThemeConfig } from "antd"

const theme: ThemeConfig = {
    token: {
        // seed tokens
        colorBgBase: "#FFFFFF",
        colorPrimary: "#1E90FF",
        colorTextBase: "#000000",
        colorSuccess: "#32A852",
        colorWarning: "#FFD700",
        colorError: "#B8132B",
        colorInfo: "#1E90FF",
        colorLink: "#B8132B",

        // map tokens
        colorBgContainer: "#F2F2F2",
        colorBorder: "#E5E5E5",
        colorTextSecondary: "#333333",
        colorText: "#000000",
        colorLinkHover: "#D9534F",
        
        // aliasTokens
        colorTextHeading: "#137FB9",
        colorTextPlaceholder: "#13B9A0",

        fontSize: 16,
        borderRadius: 20,
        borderRadiusSM: 14,

        screenXS: 480,
        screenXSMax: 575,
        screenXSMin: 480,

        screenSM: 576,
        screenSMMax: 767,
        screenSMMin: 576,

        screenMD: 768,
        screenMDMax: 991,
        screenMDMin: 768,

        screenLG: 992,
        screenLGMax: 1199,
        screenLGMin: 992,
        
        screenXL: 1200,
        screenXLMax: 1599,
        screenXLMin: 1200,

        screenXXL: 1600,
        screenXXLMin: 1600,

    },
    components: {
        Button: {
            colorPrimary: "#1E90FF",
            colorPrimaryHover: "#137fb9",
        },
        Card: {
            colorBgContainer: "#FFFFFF",
            colorBorder: "#E5E5E5",     
        },
        Divider: {
            colorSplit: "#E5E5E5",
            lineWidth: 1,
        },
        Typography: {
            colorTextHeading: "#3B536D",
            colorText: "#333333",       
        },
        Input: {
            activeBorderColor: "#1E90FF",
            hoverBorderColor: "#137fb9",
            colorTextPlaceholder: "#B5B5B5",
        },
        Segmented: {
            trackPadding: 4,
            controlHeight: 50,
            controlPaddingHorizontal: 16,
            borderRadius: 11
        },
        Menu: {
            darkItemSelectedBg: "#2A4158", 
            darkItemBg: "#3B536D",
            darkItemColor: "#E5E5E5",
            darkItemHoverBg: "#243B53",
            darkItemHoverColor: "#FFFFFF",
        },
        Layout: {
            headerBg: "#1C2B3A",
            siderBg: "#3B536D",
            triggerBg: "#1C2B3A",
            triggerColor: "#E5E5E5",
            bodyBg: "#F5F5F5",
        }
    },
}

export default theme