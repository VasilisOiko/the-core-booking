import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
    token: {
        fontSize: 16,
        colorPrimary: '#1890ff',
        colorTextHeading: '#f1f0f1'
    },
    components: {
        Layout: {
            bodyBg: '#252525',
            // headerBg: '#484556',
        },
    },
};

export default theme;