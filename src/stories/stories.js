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
    const updateParams = vote ? `data-action="update" data-params='{ \"alias\": \"leaders\", \"data\": { \"selectedUserId\": ${id}  }}'` : "";
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
    if (prevIndex < 0 && prevIndex > -usersOnScreen) {
        prevIndex = 0;
    } else if (prevIndex <= -usersOnScreen) {
        prevIndex = null;
    }
    if (nextIndex >= users.length) {
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
            ? `<div class="slide__arrow slide__arrow_prev slide__arrow_active" 
            ${prevIndex !== null ? `data-action='update' data-params='{ \"alias\": \"vote\", \"data\": { \"offset\": ${prevIndex}  }}'` : ""}></div>
            <div class="slide__arrow  slide__arrow_next" 
            ${nextIndex !== null ? `data-action='update' data-params='{ \"alias\": \"vote\", \"data\": { \"offset\": ${nextIndex}  }}'` : ""}></div>`
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
    let dashOffset = 0;
    const valueSumm = categories.map((item) => Number(item.valueText.match(/\d+/g))).reduce((acc, item) => acc + item);
    const diagram = categories.reduce(
        (acc, item, i) => {
            let { title, valueText, differenceText } = item;
            valueText = valueText.match(/\d+/g);
            differenceText = differenceText.match(/^([/+]|[-])?\d+/g);
            const legendItem = `<div class="item-legend item-legend_${modifyClasses[i]}">
                                    <div class="item-legend__code">${title}</div>
                                    <div class="item-legend__value">${differenceText}</div>
                                    <div class="item-legend__value">${valueText}</div>
                                </div>`;
            const lengthSector = valueText / valueSumm ? (valueText / valueSumm) * 100 - 5 / 18 : 0;
            const diagramSector = `<circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke-width="15%" 
                                    stroke-dasharray="${lengthSector} ${100 - lengthSector}" stroke-dashoffset="${25 - dashOffset}"></circle>`;
            dashOffset += lengthSector ? lengthSector + 5 / 18 : 0;
            acc["legendBlock"] = [...acc["legendBlock"], legendItem];
            acc["diagramBlock"] = [...acc["diagramBlock"], diagramSector];
            return acc;
        },
        { legendBlock: [], diagramBlock: [] }
    );
    const legendBlock = diagram["legendBlock"].join("");
    const diagramBlock = diagram["diagramBlock"].join("");
    return `<div class="slide__diagram">                
                    <svg xmlns="http://www.w3.org/2000/svg" class="slide__sectors" width="100%" height="100%" viewBox="2.3 2.3 37.5 37.5">${diagramBlock}</svg>
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
                <filter id="dark-filter1" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
                <filter id="dark-filter2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
                <filter id="dark-filter3" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
                <filter id="dark-filter4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
                <radialGradient id="light-gradient1" fx="49.84%" fy="49.84%" cx="49.84%" cy="50.16%">
                    <stop offset="81.25%" stop-color="rgb(255, 184, 0)" stop-opacity="0.8"/>
                    <stop offset="100%" stop-color="rgb(255, 239, 153)" stop-opacity="0.6" />
                </radialGradient>
                <radialGradient id="light-gradient2" fx="49.84%" fy="49.84%" cx="49.84%" cy="50.16%">
                    <stop offset="81.25%" stop-color="rgb(255, 184, 0)" stop-opacity="0.5"/>
                    <stop offset="100%" stop-color="rgb(255, 239, 153)" stop-opacity="0.3" />
                </radialGradient>            
                <radialGradient id="light-gradient3" fx="49.84%" fy="49.84%" cx="49.84%" cy="50.16%">
                    <stop offset="82.81%" stop-color="rgb(166, 166, 166)" stop-opacity="0.3"/>
                    <stop offset="92.19%" stop-color="rgb(203, 203, 203)" stop-opacity="0.1" />
                </radialGradient>
                <radialGradient id="light-gradient4" fx="49.84%" fy="49.84%" cx="49.84%" cy="50.16%">
                    <stop offset="82.81%" stop-color="rgb(191, 191, 191)" stop-opacity="0.8"/>
                    <stop offset="92.19%" stop-color="rgb(228, 228, 228)" stop-opacity="0.5" />
                </radialGradient>                 
                <radialGradient id="dark-gradient1" fx="49.84%" fy="49.84%" cx="49.84%" cy="50.16%">
                    <stop offset="71.88%" stop-color="rgba(255, 163, 0)" stop-opacity="0.8"/>
                    <stop offset="100%" stop-color="rgb(91, 58, 0)" stop-opacity="0.8" />
                </radialGradient>         
                <radialGradient id="dark-gradient2" fx="49.84%" fy="49.84%" cx="49.84%" cy="50.16%">
                    <stop offset="72.92%" stop-color="rgb(99, 63, 0)" stop-opacity="0.5"/>
                    <stop offset="100%" stop-color="rgb(15, 9, 0)" stop-opacity="0.5" />
                </radialGradient>       
                <radialGradient id="dark-gradient3" fx="49.84%" fy="49.84%" cx="49.84%" cy="50.16%">
                    <stop offset="71.88%" stop-color="rgb(155, 155, 155)" stop-opacity="0.5"/>
                    <stop offset="100%" stop-color="rgb(56, 41, 0)" stop-opacity="0.5" />
                </radialGradient>                
                <radialGradient id="dark-gradient4" fx="49.84%" fy="49.84%" cx="49.84%" cy="50.16%">
                    <stop offset="71.88%" stop-color="rgb(77, 77, 77)" stop-opacity="0.5"/>
                    <stop offset="100%" stop-color="rgb(56, 41, 0)" stop-opacity="0.5" />
                </radialGradient> 
            </defs>
        </svg>`;
}
