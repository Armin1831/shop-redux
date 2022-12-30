import {useState} from "react";
import OutsideHandler from "../../hooks/useOutsideHandler";

export type TopbarButtonProps = {
    className?: string
    buttonName: string
    dropdownNames: string[]
}

function TopbarButton({buttonName, dropdownNames, className}: TopbarButtonProps) {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [buttonNameState, setButtonNameState] = useState(buttonName);

    return (
        <OutsideHandler closeDropdown={setOpenDropdown}>
            <div className={`btn-group ${className ? className : ""} ${openDropdown ? "show" : ""}`}>
                <button
                    type="button"
                    className="btn btn-sm btn-light dropdown-toggle"
                    data-toggle="dropdown"
                    onClick={() => setOpenDropdown(!openDropdown)}
                >
                    {buttonNameState}
                </button>
                <div
                    className={`dropdown-menu dropdown-menu-right ${openDropdown ? "show" : ""}`}
                >
                    {dropdownNames.map((dropdownName, index) => (
                        <button
                            className="dropdown-item" type="button" key={index}
                            onClick={() => setButtonNameState(dropdownName)}
                        >
                            {dropdownName}
                        </button>
                    ))}
                </div>
            </div>
        </OutsideHandler>
    );
}

export default TopbarButton;