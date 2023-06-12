import { MyParagraph } from "./MyParagraph";
import React, { useMemo } from "react";

const Demo: React.FC<{ show: boolean }> = React.memo((props) => {
    const { show } = props;

    const content = useMemo(() => {
        return show ? "New" : "";
    }, [show]);

    return <MyParagraph>{content}</MyParagraph>;
});

export { Demo };
