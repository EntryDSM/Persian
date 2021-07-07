import { AxiosError, Method } from 'axios';

import { client } from './axios';

export async function requestAndMapResponse<Response, MappedResponse>({
  method,
  uri,
  body,
  mapper = (data: unknown) => data as MappedResponse,
}: {
  method: Method;
  uri: string;
  body?: any;
  mapper?: (response: Response) => MappedResponse;
}) {
  try {
    const { data } = await client.request<Response>({
      method,
      url: uri,
      data: body,
    });

    return mapper(data);
  } catch (_errpr) {
    const error: AxiosError = _errpr;
    return Promise.reject(error);
  }
}
