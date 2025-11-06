import { useState } from "react";

const TogglePanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePanel = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={togglePanel}>
        {isOpen ? "Hide Panel" : "Show Panel"}
      </button>
      {isOpen && <p>Panel Content</p>}
    </div>
  );
};

export default TogglePanel;
