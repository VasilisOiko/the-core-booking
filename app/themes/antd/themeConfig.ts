import type { ThemeConfig } from "antd"

const theme: ThemeConfig = {
    token: {
        fontSize: 16,
        colorPrimary: "#1890ff",
        colorTextHeading: "#f1f0f1",
        borderRadius: 24
    },
    components: {
        Segmented: {
            trackPadding: 4,
            controlHeight: 50,
            controlPaddingHorizontal: 16,
            borderRadius: 11
        },
        Layout: {
            bodyBg: "#252525",
        },
    },
};

export default theme