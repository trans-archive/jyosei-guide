Reflect.set(self, "dataLayer", Reflect.get(self, "dataLayer") || []);

gtag("js", new Date());
gtag("config", "G-HRBGCQKEY6");
loadScript("https://www.googletagmanager.com/gtag/js?id=G-HRBGCQKEY6");

export function gtag(name: "js", value: Date): void;
export function gtag(name: "config", value: string): void;
export function gtag(name: "event", action: string, params: object): void;
export function gtag(): void {
  Reflect.get(self, "dataLayer").push(arguments);
}

function loadScript(url: string) {
  return new Promise<void>((resolve, reject) => {
    const element = document.createElement("script");
    element.src = url;
    element.addEventListener("load", () => {
      resolve();
      element.remove();
    });
    element.addEventListener("error", reject);
    document.head.appendChild(element);
  });
}
