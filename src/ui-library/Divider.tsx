export interface DividerProps {
  width?: string;
  height?: string;
  color?: string;
  margin?: string;
}
export const Divider = (props: DividerProps) => {
  return (
    <div
      style={{
        width: props?.width ?? "100%",
        height: props?.height ?? "1px",
        backgroundColor: props?.color ?? "#E0E0E0",
        margin: props?.margin ?? "16px 0",
      }}
    ></div>
  );
};
