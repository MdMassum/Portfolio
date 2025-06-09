import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const AnimatedBorderButton = ({
  children,
  className = "",
  onClick,
  disabled = false,
  innerBg = "bg-black dark:bg-transparent",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "relative group flex justify-center items-center gap-1 px-0.5 py-0.5 rounded-xl text-white border border-transparent overflow-hidden transition-all duration-300 ease-in-out",
        "hover:text-red-500 dark:hover:text-red-600",
        className
      )}
    >
      {/* Animated red border */}
      <span className="absolute inset-[-50%] dark:bg-[conic-gradient(transparent,transparent,#ff0000)]  animate-spin z-0 " />

      {/* Inner background masking the center */}
      <span
        className={clsx(
          "absolute top-[2px] right-[2px] bottom-[2px] left-[2px] rounded-xl z-10",
          innerBg
        )}
      />

      {/* Content on top */}
      <span className="flex items-center gap-1 z-20 px-4 py-2 rounded-xl bg-black group-hover:shadow-[0_0_10px_2px_red] dark:hover:bg-gradient-to-b from-gray-300 via-gray-50 to-gray-400">
        {children}
      </span>
    </button>
  );
};

AnimatedBorderButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  innerBg: PropTypes.string, // to allow background override (e.g., "bg-white")
};

export default AnimatedBorderButton;
