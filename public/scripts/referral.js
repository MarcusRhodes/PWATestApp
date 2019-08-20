//Tabs for referral screen
const tabs = document.querySelectorAll('.tab button');
for (const tab of tabs) {
    let pending = document.querySelector('.referrals-pending');
    let qualified = document.querySelector('.referrals-qualified');
    let sold = document.querySelector('.referrals-sold');
    let declined = document.querySelector('.referrals-declined');
    tab.addEventListener('click', event => {
        if (tab.innerText.includes("Pending")) {
            pending.style.right = "0%";
            qualified.style.right = "110%";
            sold.style.right = "110%";
            declined.style.right = "110%";

        } else if (tab.innerText.includes("Qualified")) {
            pending.style.right = "110%";
            qualified.style.right = "0%";
            sold.style.right = "110%";
            declined.style.right = "110%";

        } else if (tab.innerText.includes("Sold")) {
            pending.style.right = "110%";
            qualified.style.right = "110%";
            sold.style.right = "0%";
            declined.style.right = "110%";

        } else if (tab.innerText.includes("Declined")) {
            pending.style.right = "110%";
            qualified.style.right = "110%";
            sold.style.right = "110%";
            declined.style.right = "0%";
        }
    });
} 
