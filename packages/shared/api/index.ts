import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

interface ApiOpts {
  baseURL?: string;
  headers?: any;
}

class Api {
  private xhr: AxiosInstance;

  constructor(opts: ApiOpts = { baseURL: "", headers: {} }) {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

    const headers = {
      "Content-Type": "application/json; charset=UTF8",
      ...opts.headers,
    };

    this.xhr = axios.create({
      baseURL: opts.baseURL || apiBaseUrl,
      headers,
    });
  }

  private handleErr = (err: any) => {
    // HandleErr
    if (err && err?.response) {
      if (err.response.status >= 500) {
        // ERR
      }
    } else {
      // Handle ERR
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private handleRes = (_res: AxiosResponse) => {
    // HandleRes
  };

  get<T = AxiosResponse>(
    url: string,
    params?: any
  ): Promise<AxiosResponse<T>> {
    return new Promise((resolve, reject) => {
      this.xhr
        .request<T>({
          method: "GET",
          url,
          params,
        })
        .then((res) => {
          resolve(res);
          this.handleRes(res);
        })
        .catch((err) => {
          reject(err);
          this.handleErr(err);
        });
    });
  }

  post(
    url: string,
    params?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.xhr
        .post(url, params, config)
        .then((res) => {
          resolve(res);
          this.handleRes(res);
        })
        .catch((err) => {
          reject(err);
          this.handleErr(err);
        });
    });
  }

  put(url: string, params?: any): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.xhr
        .put(url, params)
        .then((res) => {
          resolve(res);
          this.handleRes(res);
        })
        .catch((err) => {
          reject(err);
          this.handleErr(err);
        });
    });
  }

  delete(url: string, params?: any): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.xhr
        .delete(url, { data: params })
        .then((res) => {
          resolve(res);
          this.handleRes(res);
        })
        .catch((err) => {
          reject(err);
          this.handleErr(err);
        });
    });
  }

  upload(
    url: string,
    data: any,
    uploadCallback?: (progress: number) => void
  ): Promise<AxiosResponse> {
    return new Promise(async (resolve, reject) => {
      this.xhr
        .post(url, data, {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data;",
          },
          onUploadProgress: uploadCallback
            ? (e) => {
                const total = e.total || 0;
                let progress = Math.floor((e.loaded * 100) / total);
                uploadCallback(progress);
              }
            : undefined,
        })
        .then((res) => {
          this.handleRes(res);
          resolve(res);
        })
        .catch((err) => {
          this.handleErr(err);
          reject(err);
        });
    });
  }
}

export default Api;
