import React from "react";

// components
import { DialogContent, Dialog, DialogTitle } from "@material-ui/core";
import { OrderButton } from "./Buttons/OrderButton";

export const NewOrderConfirmDialog = ({
  isOpen,
  onClose,

  // 他店舗の名前
  existingResutaurautName,

  // いま選択した店舗の名前
  newResutaurautName,

  // 仮注文の置き換えAPIを呼ぶ
  onClickSubmit,
}: {
  isOpen: boolean;
  onClose: VoidFunction;

  // 他店舗の名前
  existingResutaurautName: string;

  // いま選択した店舗の名前
  newResutaurautName: string;

  // 仮注文の置き換えAPIを呼ぶ
  onClickSubmit: React.MouseEventHandler<HTMLButtonElement>;
}) => (
  <Dialog open={isOpen} onClose={onClose} maxWidth="xs">
    <DialogTitle>新規注文を開始しますか？</DialogTitle>
    <DialogContent>
      <p>
        {`ご注文に ${existingResutaurautName} の商品が含まれています。
          新規の注文を開始して ${newResutaurautName} の商品を追加してください。`}
      </p>
      {/* 先ほど作ったOrderButtonをここで使用 */}
      <OrderButton onClick={onClickSubmit}>新規注文</OrderButton>
    </DialogContent>
  </Dialog>
);
