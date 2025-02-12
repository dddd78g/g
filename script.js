document.addEventListener("DOMContentLoaded", function () {
    const emailContainer = document.getElementById("email-container");
    const addEmailButton = document.getElementById("add-email");
    const form = document.getElementById("signup-form");
 function addEmailField() {
        if (emailContainer.children.length < 5) {
            const div = document.createElement("div");
            div.classList.add("email-input");

            const input = document.createElement("input");
            input.type = "email";
            input.name = "emails[]";
            input.required = true;

            const removeBtn = document.createElement("button");
            removeBtn.innerHTML = "❌";
            removeBtn.classList.add("remove-email");
            removeBtn.type = "button";
            removeBtn.addEventListener("click", function () {
                div.remove();
            });

            div.appendChild(input);
            div.appendChild(removeBtn);
            emailContainer.appendChild(div);
        }
    }

    addEmailButton.addEventListener("click", addEmailField);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const companyName = document.getElementById("companyName").value;
        const emails = Array.from(document.getElementsByName("emails[]")).map(input => input.value);

        fetch("https://hichyyy77.app.n8n.cloud/webhook-test/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ companyName, emails })
        })
        .then(response => response.json())
        .then(data => {
            alert("Sign-up successful!");
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});
