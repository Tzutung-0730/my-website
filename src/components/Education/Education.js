import React, { useState } from "react";
import "./Education.scss";

// 示例數據，包含學歷和活動
const educationData = [
    {
        school: "國立中興大學",
        degree: "碩士",
        department: "資訊管理學系",
        period: "2025年 - 現在",
        gpa: "GPA: 3.8",
        experience: "進行深度學習研究，並參與物聯網應用專案",
        activities: [
            "發表AI論文",
            "參與物聯網學術專案"
        ],
    },
    {
        school: "國立彰化師範大學",
        degree: "學士",
        department: "資訊管理學系",
        period: "2021年 - 2024年",
        gpa: "GPA: 3.6",
        experience: "學習資料科學、程式設計，並在校內擔任學術委員",
        activities: [
            "擔任學生會成員",
            "參與程式設計競賽"
        ],
    },
];

function Education() {
    const [openIndex, setOpenIndex] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");

    // 切換下拉顯示
    const toggleDetails = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // 排序學歷資料
    const sortedData = [...educationData].sort((a, b) => {
        if (sortOrder === "asc") {
            return a.period.localeCompare(b.period);
        } else {
            return b.period.localeCompare(a.period);
        }
    });

    return (
        <div className="education-container">
            <h1>學歷</h1>

            <div className="education-table-container">
                <table className="education-table">
                    <thead>
                        <tr>
                            <th>學校名稱</th>
                            <th>學位</th>
                            <th>科系</th>
                            <th>
                                期間 
                                <button
                                    className="sort-btn"
                                    onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                                >
                                    <i className={`pi ${sortOrder === "asc" ? "pi-angle-up" : "pi-angle-down"}`} />
                                </button>
                            </th>
                            <th>成績</th>
                            <th>詳細經歷</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.school}</td>
                                <td>{item.degree}</td>
                                <td>{item.department}</td>
                                <td>{item.period}</td>
                                <td>{item.gpa}</td>
                                <td>
                                    <button className="toggle-btn" onClick={() => toggleDetails(index)}>
                                        {openIndex === index ? "收起" : "顯示詳情"}
                                    </button>
                                    {openIndex === index && (
                                        <div className="activities">
                                            <p><strong>經歷：</strong>{item.experience}</p>
                                            <ul>
                                                {item.activities.map((activity, idx) => (
                                                    <li key={idx}>{activity}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Education;
