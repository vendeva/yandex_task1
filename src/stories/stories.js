function renderTemplate(alias, data) {
    const { title, subtitle } = data;
    let slideBlock = "";
    switch (alias) {
        case "leaders":
            slideBlock = renderTemplateUsers(data);
            break;
        case "vote":
            slideBlock = renderTemplateVoteUsers(data, true);
            break;
        case "chart":
            slideBlock = `<div class="slide__chart">
                            ${renderTemplateChart(data)}
                        </div>                   
                        <div class="slide__users">
                            ${renderTemplateVoteUsers(data)}
                        </div>`;
            break;
        case "diagram":
            slideBlock = renderTemplateDiagram(data);
            break;
        case "activity":
            slideBlock = renderTemplateActivity(data);
            break;
        default:
            break;
    }
    return `<div class="slide ${alias}">
                <div class="slide__header">
                    <div class="slide__title title">${title}</div>
                    <div class="subtitle">${subtitle}</div>  
                </div>
                <div class="slide__block">
                    ${slideBlock}
                </div>
            </div>`;
}

function renderTemplateUser(user, icon, vote = false) {
    const { id, name, avatar, valueText } = user;
    const modifyClass = icon && vote ? "item-dev_active" : "";
    const updateParams = vote ? `data-action="update" data-params='{ \"alias\": \"leaders\", \"data\": { \"selectedUserId\": \"${id}\"  }}'` : "";
    return `<div class="item-dev ${modifyClass}" ${updateParams}>
                <div class="item-dev__img">
                    <img src="img/3x/${avatar}">
                    ${icon ? `<div class="item-dev__icon">${icon}</div>` : ""}
                </div>
                <div class="item-dev__info">
                    <div class="item-dev__name name">${name}</div>                                    
                    ${valueText && !vote ? `<div class="item-dev__value">${valueText}</div>` : ""}
                </div>
            </div>`;
}

function renderTemplateUsers(data) {
    const { users, emoji, selectedUserId } = data;
    return users
        .reduce((acc, item, i) => {
            icon = !i ? emoji : item.id === selectedUserId ? "👍" : "";
            if (i <= 4) {
                acc = [
                    ...acc,
                    `<div class="item-column">
                            ${renderTemplateUser(item, icon)}
                            <div class="item-column__column title">${i + 1}</div>
                        </div>`,
                ];
            }
            if (i > 3 && icon === "👍") {
                acc.pop();
                acc = [
                    ...acc,
                    `<div class="item-column item-column_like title">
                            ${renderTemplateUser(item, icon)}
                            <div class="item-column__column">${i + 1}</div>
                        </div>`,
                ];
            }
            return acc;
        }, [])
        .join("");
}

function renderTemplateVoteUsers(data, vote = false) {
    const { emoji, selectedUserId, offset, users } = data;
    const usersOnScreen = window.innerWidth > window.innerHeight ? 6 : 8;
    const startIndex = offset ? offset : 0;
    const modifyUsers = users.slice(startIndex, startIndex + 8);
    let prevIndex = startIndex - usersOnScreen;
    let nextIndex = startIndex + usersOnScreen;
    if (prevIndex < 0) {
        prevIndex = null;
    }
    if (nextIndex > users.length) {
        nextIndex = null;
    }

    const htmlUsers = modifyUsers
        .reduce((acc, item, i) => {
            const icon = item.id === selectedUserId ? "👍" : "";
            if (vote || (!vote && i < 2)) {
                acc = [...acc, renderTemplateUser(item, icon, vote)];
            }
            return acc;
        }, [])
        .join("");
    return `${htmlUsers}${
        vote
            ? `<div class="slide__arrow slide__arrow_prev slide__arrow_active" data-action="update" data-params='{ \"alias\": \"vote\", \"data\": { \"offset\": \"${prevIndex}\"  }}'></div>
        <div class="slide__arrow  slide__arrow_next" data-action="update" data-params='{ \"alias\": \"vote\", \"data\": { \"offset\": \"${nextIndex}\"  }}'></div>`
            : ""
    }`;
}

function renderTemplateChart(data) {
    const { values } = data;
    const index = values.findIndex((item) => item.active);
    const valuesSortDesc = values.slice(0, index + 3).slice(-9);
    valuesSortDesc.sort((a, b) => {
        const c = Number(a["value"]);
        const d = Number(b["value"]);
        if (c > d) {
            return -1;
        }
        if (d > c) {
            return 1;
        }
        return 0;
    });
    const modifyValues = values.slice(0, index + 3).slice(-9);
    return modifyValues
        .reduce((acc, item) => {
            const { title, value, active } = item;
            const chartItem = `<div class="item-chart ${active ? "item-chart_active" : ""} ${!value ? "item-chart_zero" : ""}" 
            ${!value ? "" : `style="grid-template-rows: 1fr calc(${value / valuesSortDesc[0].value}*(70% - 30px) + 30px) 18px"`}
            >
                <div class="item-chart__block">
                    ${value ? `<div class="item-chart__value">${value}</div>` : ""}
                    <div class="item-chart__color"></div>
                </div>
                <div class="item-chart__sprint">${title}</div>
            </div>`;
            return [...acc, chartItem];
        }, [])
        .join("");
}

function renderTemplateDiagram(data) {
    const { totalText, differenceText, categories } = data;
    const modifyClasses = ["one", "two", "three", "four"];
    const legendBlock = categories
        .reduce((acc, item, i) => {
            let { title, valueText, differenceText } = item;
            valueText = valueText.match(/\d+/g);
            differenceText = differenceText.match(/[/+\d]+/g);
            const legendItem = `<div class="item-legend item-legend_${modifyClasses[i]}">
                                    <div class="item-legend__code">${title}</div>
                                    <div class="item-legend__value">${differenceText}</div>
                                    <div class="item-legend__value">${valueText}</div>
                                </div>`;
            if (i < 4) {
                acc = [...acc, legendItem];
            }
            return acc;
        }, [])
        .join("");
    return `<div class="slide__diagram">                
                <svg class="slide__sectors" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 328 328" fill="none">
                    <g>
                    <path d="M321.854 170.788C325.165 170.93 327.975 168.361 327.997 165.047C328.175 137.195 321.255 109.72 307.846 85.2319C294.437 60.7441 275.015 40.1147 251.452 25.2624C248.649 23.4954 244.97 24.4797 243.307 27.3458L224.635 59.5201C222.972 62.3861 223.956 66.0446 226.732 67.8554C242.543 78.172 255.595 92.2486 264.692 108.862C273.789 125.476 278.62 144.054 278.795 162.933C278.826 166.247 281.378 169.047 284.688 169.19L321.854 170.788Z"  fill-opacity="0.6"/>
                    </g>
                    <g>
                    <path d="M84.6469 27.3725C82.9827 24.507 79.3038 23.5239 76.5011 25.2918C53.6423 39.7113 34.6732 59.576 21.3177 83.1436C6.97495 108.453 -0.377343 137.123 0.0149087 166.211C0.40716 195.3 8.52984 223.761 23.5498 248.674C37.536 271.873 57.0338 291.219 80.2732 305.017C83.1225 306.709 86.7735 305.627 88.3599 302.718L106.169 270.057C107.755 267.148 106.673 263.517 103.851 261.781C88.2615 252.191 75.1646 238.996 65.6849 223.272C55.1709 205.832 49.485 185.91 49.2104 165.548C48.9359 145.186 54.0825 125.117 64.1224 107.401C73.1746 91.4266 85.911 77.8829 101.236 67.8765C104.011 66.0648 104.994 62.4059 103.33 59.5405L84.6469 27.3725Z" fill-opacity="0.5"/>
                    </g>
                    <g>
                    <path d="M91.2477 304.254C89.7219 307.195 90.8653 310.827 93.8607 312.245C116.678 323.04 141.706 328.435 166.997 327.973C194.291 327.474 221.028 320.17 244.785 306.723C268.542 293.276 288.566 274.112 303.042 250.968C316.456 229.522 324.713 205.287 327.201 180.168C327.528 176.87 325.002 174.02 321.695 173.814L284.567 171.504C281.259 171.298 278.428 173.815 278.049 177.107C276.102 194.051 270.4 210.375 261.329 224.877C251.196 241.078 237.179 254.493 220.549 263.906C203.92 273.319 185.204 278.432 166.098 278.781C148.995 279.093 132.065 275.58 116.536 268.528C113.518 267.158 109.903 268.29 108.377 271.232L91.2477 304.254Z" fill-opacity="0.25"/>
                    </g>
                    <g>
                    <path d="M240.6 25.8101C242.206 22.9119 241.164 19.2494 238.209 17.75C215.24 6.09516 189.821 0.00121904 164.008 1.82828e-07C138.195 -0.00121867 112.775 6.09032 89.805 17.743C86.8498 19.2421 85.8069 22.9045 87.4131 25.8029L105.445 58.3404C107.051 61.2388 110.697 62.271 113.675 60.8184C129.328 53.184 146.538 49.1992 164.005 49.2C181.473 49.2008 198.683 53.1873 214.335 60.8231C217.313 62.276 220.958 61.2442 222.565 58.3459L240.6 25.8101Z" fill-opacity="0.8"/>
                    </g>                    
                </svg>
                <div class="slide__innertext">
                    <div class="slide__innertitle">${totalText}</div>
                    <div class="slide__innersubtitle">${differenceText}</div>
                </div>
            </div>                
            <div class="slide__legend">
                ${legendBlock}
            </div>
            ${renderTemplateDefs()}`;
}

function renderTemplateActivity(data) {
    let activityValues = Object.values(data.data);
    let size = "1 час";
    const modifyValues = activityValues
        .reduce((acc, item, i) => {
            const monday = !i ? "commit_mon" : "";
            if (window.innerWidth > window.innerHeight) {
                item = item.reduce((acc, value, i) => {
                    return !(i % 2) ? [...acc, value + item[i + 1]] : acc;
                }, []);
                size = "2 часа";
            }
            const weekTemplate = item
                .map((value, hour) => {
                    let modifyClass = "";
                    switch (true) {
                        case value < 1:
                            modifyClass = "min";
                            break;
                        case 1 <= value && value <= 2:
                            modifyClass = "mid";
                            break;
                        case 3 <= value && value <= 4:
                            modifyClass = "max";
                            break;
                        case value > 4:
                            modifyClass = "extra";
                            break;
                        default:
                            break;
                    }
                    return `<div class="commit ${monday} commit_${modifyClass}" style="order: ${hour}"></div>`;
                })
                .join("");
            return [...acc, weekTemplate];
        }, [])
        .join("");
    return `<div class="slide__activity">
                <div class="slide__commits">
                    ${modifyValues}
                </div>
            </div>
            <div class="legend">
                <div class="legend__color legend__color_size">
                    <div class="legend__segment"></div>
                    <div class="legend__segment"></div>
                    <div class="legend__segment"></div>
                </div>                
                <div class="legend__color legend__color_min"></div>
                <div class="legend__color legend__color_mid"></div>
                <div class="legend__color legend__color_max"></div>
                <div class="legend__color legend__color_extra"></div> 
                <div class="legend__text">${size}</div>
                <div class="legend__text">0</div>
                <div class="legend__text">1 — 2</div> 
                <div class="legend__text">3 — 4</div> 
                <div class="legend__text">5 — 6</div>     
            </div>`;
}

function renderTemplateDefs() {
    return `<svg viewBox="0 0 0 0" style="position: absolute; z-index: -1; opacity: 0;">  
                <defs>
                <filter id="light-filter1" x="222.822" y="24.38" width="105.178" height="147.413" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.69 0 0 0 0 0.225 0 0 0 0.4 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-1" dy="1"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
                </filter>
                <filter id="light-filter2" x="-1" y="24.4084" width="107.903" height="282.412" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.5125 0 0 0 0 0.5125 0 0 0 0 0.5125 0 0 0 0.6 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-1" dy="1"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
                </filter>
                <filter id="light-filter3" x="89.5731" y="171.492" width="237.656" height="157.508" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.4125 0 0 0 0 0.4125 0 0 0 0 0.4125 0 0 0 0.2 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-1" dy="1"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
                </filter>
                <filter id="light-filter4" x="85.6608" y="0" width="155.692" height="62.4767" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.69 0 0 0 0 0.225 0 0 0 0.9 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-1" dy="1"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
                </filter>
                <radialGradient id="light-gradient1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163.486 164.514) rotate(90) scale(163.486)">
                <stop offset="0.8125" stop-color="#FFB800" stop-opacity="0.4"/>
                <stop offset="1" stop-color="#FFEF99" stop-opacity="0.2"/>
                </radialGradient>
                <radialGradient id="light-gradient2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163.486 164.514) rotate(90) scale(163.486)">
                    <stop offset="0.828125" stop-color="#BFBFBF" stop-opacity="0.69"/>
                    <stop offset="0.921875" stop-color="#E4E4E4" stop-opacity="0.2"/>
                </radialGradient>
                <radialGradient id="light-gradient3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163.486 164.514) rotate(90) scale(163.486)">
                    <stop offset="0.828125" stop-color="#A6A6A6" stop-opacity="0.69"/>
                    <stop offset="0.921875" stop-color="#CBCBCB" stop-opacity="0.2"/>
                </radialGradient>
                <radialGradient id="light-gradient4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163.486 164.514) rotate(90) scale(163.486)">
                    <stop offset="0.8125" stop-color="#FFB800" stop-opacity="0.7"/>
                    <stop offset="1" stop-color="#FFEF99" stop-opacity="0.4"/>
                </radialGradient>
                <filter id="dark-filter1" x="223.822" y="24.3801" width="128.178" height="170.413" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.575 0 0 0 0 0.365803 0 0 0 0 0 0 0 0 0.2 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.791667 0 0 0 0 0.504028 0 0 0 0 0 0 0 0 0.9 0"/>
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-1" dy="1"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
                </filter>
                <filter id="dark-filter2" x="0" y="24.4084" width="130.903" height="305.412" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0.2 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0.9 0"/>
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-1" dy="1"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
                </filter>
                <filter id="dark-filter3" x="90.5731" y="171.492" width="260.656" height="180.508" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.545833 0 0 0 0 0.545833 0 0 0 0 0.545833 0 0 0 0.9 0"/>
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-1" dy="1"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
                </filter>
                <filter id="dark-filter4" x="86.6608" y="0" width="178.692" height="85.4767" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.972549 0 0 0 0 0.618715 0 0 0 0 0 0 0 0 0.2 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.636666 0 0 0 0 0 0 0 0 0.9 0"/>
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-1" dy="1"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
                </filter>
                <radialGradient id="dark-gradient1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(175.486 176.514) rotate(90) scale(163.486)">
                    <stop offset="0.729167" stop-color="#633F00"/>
                    <stop offset="1" stop-color="#0F0900"/>
                </radialGradient>
                <radialGradient id="dark-gradient2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(175.486 176.514) rotate(90) scale(163.486)">
                    <stop offset="0.71875" stop-color="#4D4D4D"/>
                    <stop offset="1" stop-color="#382900"/>
                </radialGradient>
                <radialGradient id="dark-gradient3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(175.486 176.514) rotate(90) scale(163.486)">
                    <stop offset="0.71875" stop-color="#9B9B9B"/>
                    <stop offset="1" stop-color="#382900"/>
                </radialGradient>
                <radialGradient id="dark-gradient4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(175.486 176.514) rotate(90) scale(163.486)">
                    <stop offset="0.71875" stop-color="#FFA300"/>
                    <stop offset="1" stop-color="#5B3A00"/>
                </radialGradient>
            </defs>
        </svg>`;
}
