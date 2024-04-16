import { Box, IconButton } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { Description, Section } from "../../style";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoClose, IoReload } from "react-icons/io5";

const FileUpload = ({
  onDrop,
  file,
  defaultImg,
  label,
  handleDelete,
  isUpload,
}: // eslint-disable-next-line
any) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: 1 });

  // eslint-disable-next-line
  const handleProgress = (e: any) => {
    const progress = (e.loaded / e.total) * 100;
    console.log(`Fayl yuklanmoqda: ${progress.toFixed(2)}%`);
  };

  const { t } = useTranslation();
  const [url, setUrl] = useState(file);
  useEffect(() => {
    setUrl(file ? URL.createObjectURL(file) : "");
  }, [file]);
  const imageSizeInBytes = file?.size || 0;
  const imageSizeInKilobytes = (imageSizeInBytes / 1024).toFixed(2);
  const imageSizeInMegabytes = (Number(imageSizeInKilobytes) / 1024).toFixed(2);

  return (
    <Box>
      <Box className="mb-[10px] ms-[10px]">
        <label htmlFor={label} className="text-grey-700 body3">
          {label}
        </label>
      </Box>
      <Box
        sx={{ border: "1px solid #B6B8BD" }}
        className={`w-full h-[180px] rounded-[10px] border-dashed  ${
          file ? "" : "cursor-cell"
        } overflow-hidden bg-grey-0 relative max768:h-[200px]`}
      >
        <Section
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
          }}
          {...(!file && getRootProps({ onProgress: handleProgress }))}
          className={`w-full h-full flex flex-col items-center justify-center p-5 `}
        >
          <input id={label} {...getInputProps()} />
          <Box
            sx={{
              border: "1px solid #E7E7E9",
              backgroundImage: `url(${file ? url : defaultImg})`,
              backgroundSize: "cover",
            }}
            className="object-cover w-[64px] h-[64px] rounded-[12px] select-none"
          ></Box>
          {file ? (
            <>
              <Box className="flex mt-5 flex-col items-center gap-0">
                <Description className="cursor-pointer font-[600] text-[14px] leading-[21.4px] text-grey-600">
                  {file?.name}
                </Description>
                <Description className="font-[400] text-[14px] leading-[24px] text-grey-200">
                  {Number(imageSizeInKilobytes) < 1024
                    ? imageSizeInKilobytes + " KB"
                    : imageSizeInMegabytes + " MB"}
                </Description>
              </Box>
            </>
          ) : (
            <>
              <Box className="flex gap-2 mt-5 max600:flex-col max600:items-center max600:mb-2 max600:gap-0">
                <Description className="cursor-pointer font-[500] text-[14px] leading-[24px] text-grey-600 underline">
                  {t("upload1")}
                </Description>
                <Description className="font-[400] text-[14px] leading-[24px] text-grey-600">
                  {t("upload2")}
                </Description>
              </Box>
              <Description className="font-[400] text-[14px] leading-[21px] text-grey-200">
                {t("upload3")}
              </Description>
              {/* <Section className="w-[25em] h-2 mt-5 rounded-xl bg-grey-100 overflow-hidden">
                <Box className="progress h-full bg-blue-900" />
              </Section>
              <Description className="w-full text-center text-grey-300 mt-1">
                96 KB из 498 KB - Примерно 3 секунд
              </Description> */}
            </>
          )}
        </Section>
        {file && !isUpload ? (
          <Box className="absolute top-3 right-3">
            <Box className="flex gap-3">
              <IconButton
                {...getRootProps()}
                className="w-[24px] h-[24px] p-1 bg-grey-300 text-white"
              >
                <IoReload />
              </IconButton>
              <IconButton
                onClick={handleDelete}
                className="w-[24px] h-[24px] p-1 bg-red-700 text-white"
              >
                <IoClose />
              </IconButton>
            </Box>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default FileUpload;
