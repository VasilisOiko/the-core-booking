import type { ThemeConfig } from "antd";

const darkTheme: ThemeConfig = {
    token: {
        // seed tokens
        colorBgBase: "#1A1A1A", // Dark background base
        colorPrimary: "#1E90FF", // Primary blue remains the same
        colorTextBase: "#FFFFFF", // White text for readability
        colorSuccess: "#32A852", // Teal green for success
        colorWarning: "#FFD700", // Gold for warning
        colorError: "#FF4500", // Red-orange for error
        colorInfo: "#1E90FF", // Blue for informational components
        colorLink: "#1E90FF", // Blue for links

        // map tokens
        colorBgContainer: "#2A2A2A", // Slightly lighter dark for containers
        colorBorder: "#4A4A4A", // Gray for borders
        colorTextSecondary: "#CCCCCC", // Light gray for secondary text
        colorText: "#FFFFFF", // Main text color
        colorLinkHover: "#104E8B", // Darker blue on hover
        
        // accent colors matching the logo"s red

        // aliasTokens
        colorTextHeading: "#DDDDDD", // Lighter gray for headings
        colorTextPlaceholder: "#AAAAAA", // Mid-gray for placeholders

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
            colorPrimary: "#1E90FF", // Primary blue remains consistent
            colorPrimaryHover: "#104E8B", // Darker blue on hover
        },
        Card: {
            colorBgContainer: "#2A2A2A", // Dark container background
            colorBorder: "#4A4A4A", // Gray border     
        },
        Typography: {
            colorTextHeading: "#DDDDDD", // Light gray for headings
            colorText: "#CCCCCC", // Slightly darker for main text    
        },
        Input: {
            activeBorderColor: "#12baa1", // Teal green for active border
            hoverBorderColor: "#12baa1", // Teal green for hover border
        },
        Segmented: {
            trackPadding: 4,
            controlHeight: 50,
            controlPaddingHorizontal: 16,
            borderRadius: 11
        },
        Menu: {
            darkItemSelectedBg: "#084D42", // Deep teal for selected item background
            darkItemBg: "#2E3B4E", // Darker background for menu items
            darkItemColor: "#FFFFFF", // White text for contrast
            darkItemHoverBg: "#1C2B3A", // Dark blue-gray for hover state
            darkItemHoverColor: "#FFFFFF", // White text on hover
        },
        Layout: {
            headerBg: "#121212", // Very dark gray for header
            siderBg: "#1A1A1A", // Matching dark gray for sider
            bodyBg: "#202020", // Slightly lighter dark gray for body
        }
    },
};

export default darkTheme;
