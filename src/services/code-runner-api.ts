const baseUrl = import.meta.env.VITE_BASE_API_URL;

type FetchLanguagesResponse = {
  languages: {
    name: string;
    info: {
      enviromentCommand: string;
      executionCommand: string;
      executionArgs: string[];
      extension: string;
      websiteUrl: string;
    };
    enviroment: string[];
  }[];
}

type CodeExecutionRequestBody = {
  code: string,
  language: string,
}

type CodeExecutionResponse = {
  languague: string;
  code: number;
  stdout: string;
  stderr: string;
  timeStampt: number;
}

export const fetchLanguages = async () => {
  const res = await fetch(`${baseUrl}/languages`);
  const jsonData = await res.json() as FetchLanguagesResponse;
  return jsonData.languages;
}

export const fetchCodeExecution = async ({ body }: { body: CodeExecutionRequestBody }) => {
  const res = await fetch(`${baseUrl}/code`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  return await res.json() as CodeExecutionResponse;
}
