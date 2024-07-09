import type { ThemeConfig } from "antd"

const theme: ThemeConfig = {
    token: {
        fontSize: 16,
        colorPrimary: "#1890ff",
        colorTextHeading: "#45a099",
        borderRadius: 8,

        colorTextPlaceholder: "#45a099",

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
        Segmented: {
            trackPadding: 4,
            controlHeight: 50,
            controlPaddingHorizontal: 16,
            borderRadius: 11
        },
        Menu: {
            // darkPopupBg: "#252525",
            darkItemBg: "#001529",
        },
        Layout: {
            bodyBg: "#252525",
            siderBg: "#001529",
        },
    },
};

export default theme