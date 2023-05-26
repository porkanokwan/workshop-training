const tabs = document.querySelector(".tabs");
const tabButton = document.querySelectorAll("[role='tab']");
const tabPanels = Array.from(tabs.querySelectorAll("[role='tabpanel']"));

function handleTabClick(event) {
    console.log(event.currentTarget); // click btn ไหนก็จะแสดง tag btn นั้น
    // hide all tab panels
    tabPanels.forEach(panel => {
        console.log(panel);
        panel.hidden = true;
    });
    // mark all tabs as unselected
    tabButton.forEach(btn => {
        // property ใน JS ส่วนใหญ่เข้าถึงได้โดยตรง แต่ในบางตัวเช่น aria, data attributes ต้องใช้ setAttribute/getAttribute จะดีกว่า
        // btn.ariaSelected = false;
        btn.setAttribute("aria-selected", false);
        console.log(btn);
    })
    // mark the clicked tab as selected
    event.currentTarget.setAttribute("aria-selected", true);
    // find the associated tabPanel and show it!
    const { id } = event.currentTarget;
    /* METHOD 1
    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    console.log(tabPanel);
    tabPanels.hidden = false;
    */

     // METHOD 2 - find in the array of tabPanels
    const tabPanel = tabPanels.find((panel) => 
        panel.getAttribute("aria-labelledby") === id
    );
    tabPanel.hidden = false;
}

tabButton.forEach(btn => {
    btn.addEventListener("click", handleTabClick);
})