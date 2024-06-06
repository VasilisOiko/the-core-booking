import { Dropdown, Button } from "../../index";
import { type MenuProps } from "antd";
import LANGUAGES from "../../../utils/constants/languages";
import { MdLanguage } from "react-icons/md";
import { handleSelect } from "./helper"


function LocalesDropdown(props?:any) {

    const localesOptions: MenuProps["items"] = [
        {
            key: LANGUAGES.GREEK,
            label: (<div>{LANGUAGES.GREEK_TEXT}</div>),
        },
        {
            key: LANGUAGES.ENGLISH,
            label: (<div>{LANGUAGES.ENGLISH_TEXT}</div>),
        }
    ];

    return (
        <Dropdown
            {...props}
            menu={{ items: localesOptions, onClick: handleSelect }}
            placement="bottom"
            trigger={["click"]}
            arrow
        >
            <Button shape="circle" icon={<MdLanguage size="30px" color="black"/>}>
            </Button>
        </Dropdown>
    );
}

export default LocalesDropdown