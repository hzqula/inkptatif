import React from "react";

const TabBar = ({ content = "Ini Link", path = "/", status = "active" }) => {
  return (
    <li className="inline-block w-3/12 text-center">
      {status === "active" ? (
        <>
          <a
            href={path}
            className="text-primary px-8 font-semibold text-lg inline-block py-2 text-[14px] font-primary relative after:contents[''] after:w-full after:h-[4px] after:inline-block after:absolute after:bottom-0 after:left-0 after:bg-primary after:transition-all w-full"
          >
            {content}
          </a>
        </>
      ) : (
        <>
          <a
            href={path}
            className="text-primary px-8 font-semibold text-lg inline-block py-2 text-[14px] font-primary relative after:contents[''] after:w-full after:h-[4px] after:inline-block after:absolute after:bottom-0 after:left-0 after:bg-secondary after:transition-all w-full"
          >
            {content}
          </a>
        </>
      )}
    </li>
  );
};

export default TabBar;
