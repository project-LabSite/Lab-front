import axios from "axios";
import { load } from "cheerio";

const fetchScholarData = async () => {
  const url = "/api/citations?hl=ko&user=Bjxv0isAAAAJ&pagesize=100";

  try {
    const response = await axios.get(url);
    const $ = load(response.data);

    const publications = [];

    $("tr.gsc_a_tr").each((index, element) => {
      const title = $(element).find("a.gsc_a_at").text().trim();
      const authors =
        $(element).find("div.gs_gray").first().text().trim() || "CH Park";
      const publicationInfo = $(element)
        .find("div.gs_gray")
        .eq(1)
        .text()
        .trim();
      const link = $(element).find("a.gsc_a_at").attr("href")
        ? `https://scholar.google.co.kr${$(element)
            .find("a.gsc_a_at")
            .attr("href")}`
        : "";
      const yearMatch = publicationInfo.match(/\b(19|20)\d{2}\b/);
      const year = yearMatch ? yearMatch[0] : null;

      publications.push({ title, authors, publicationInfo, year, link });
    });

    return publications;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default fetchScholarData;
