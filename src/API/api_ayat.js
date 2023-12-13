export const ayatAlquran = {
  getAyatAlquran: async function (nomor) {
    try {
      const response = await fetch(
        "https://quran-api.santrikoding.com/api/surah/{nomor}"
      );
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(arr);
    }
  },
};


