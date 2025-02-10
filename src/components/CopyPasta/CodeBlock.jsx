import { Copy } from "@phosphor-icons/react";
import PropTypes from "prop-types";

const CodeBlock = ({ item }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(item.body + item.output);
    };

    return (
        <div className="max-w-[300px] bg-gray-100 shadow-lg rounded-lg p-2 relative">
            <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 bg-white p-1 rounded-full text-xl transition-all duration-200 hover:cursor-pointer"
            >
                <Copy />
            </button>
            <div className="text-gray-700 font-body">
                <code>
                    <p className="text-sm font-body mb-4">{item.body}</p>
                    <p className="text-gray-500 font-body">{item.output}</p>
                </code>
            </div>
        </div>
    );
};

CodeBlock.propTypes = {
    item: PropTypes.shape({
        body: PropTypes.string.isRequired,
        output: PropTypes.string.isRequired,
    }),
};

export default CodeBlock;
