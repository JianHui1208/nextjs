export function formatDateToDDMMYYYY(date: string | Date): string {
    const d = new Date(date);

    // 获取日期、月份和年份
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，所以需要 +1
    const year = d.getFullYear().toString();

    // 返回格式化的日期
    return `${day}/${month}/${year}`;
}