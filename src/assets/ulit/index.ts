export function parsrAsssetFile(url: string): string {
    return new URL(`../../assets/images/${url}`, import.meta.url).href;
};

//工具类，一般情况下，只能存在一些没有业务逻辑，在任何页面都可以使用的方法
export default function () {
    return { parsrAsssetFile }
}