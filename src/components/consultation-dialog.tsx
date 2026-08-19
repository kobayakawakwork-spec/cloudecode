"use client";

import { useId, useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AREAS = [
  "東京都",
  "神奈川県",
  "千葉県",
  "埼玉県",
  "大阪府",
  "愛知県(名古屋エリア)",
  "福岡県(福岡エリア)",
  "その他",
];

type ConsultationDialogProps = {
  triggerLabel: string;
  triggerClassName?: string;
  triggerSize?: "default" | "sm" | "lg";
  helperText?: string;
  helperClassName?: string;
};

export function ConsultationDialog({
  triggerLabel,
  triggerClassName,
  triggerSize = "default",
  helperText = "まずは話すだけでもOK。1分で送信できます。",
  helperClassName = "text-brand-ink-muted",
}: ConsultationDialogProps) {
  const [submitted, setSubmitted] = useState(false);
  const formId = useId();

  return (
    <Dialog onOpenChange={(open) => !open && setSubmitted(false)}>
      <div className={cn("flex flex-col", triggerClassName)}>
        <DialogTrigger asChild>
          <Button size={triggerSize} className="w-full">
            {triggerLabel}
          </Button>
        </DialogTrigger>
        {helperText && (
          <p
            className={`mt-1.5 text-center text-[11px] ${helperClassName}`}
          >
            {helperText}
          </p>
        )}
      </div>
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div
            className="flex flex-col items-center gap-3 py-6 text-center"
            role="status"
            aria-live="polite"
          >
            <CheckCircle2 aria-hidden="true" className="size-10 text-brand-blue" />
            <DialogTitle>お申し込みありがとうございます</DialogTitle>
            <DialogDescription>
              内容を確認のうえ、担当からご連絡します。
              このデモ画面では送信処理はまだ接続されていません。
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>無料転職相談のお申し込み</DialogTitle>
              <DialogDescription>
                入力は5項目のみ、1分ほどで完了します。相談だけの利用も歓迎です。
              </DialogDescription>
            </DialogHeader>
            <form
              className="flex flex-col gap-4"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="flex flex-col gap-1.5">
                <Label htmlFor={`${formId}-name`}>お名前</Label>
                <Input
                  id={`${formId}-name`}
                  name="name"
                  autoComplete="name"
                  placeholder="山田 太郎"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor={`${formId}-age`}>年齢</Label>
                  <Input
                    id={`${formId}-age`}
                    name="age"
                    type="number"
                    inputMode="numeric"
                    min={18}
                    max={35}
                    placeholder="27"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor={`${formId}-area`}>居住エリア</Label>
                  <Select name="area" required>
                    <SelectTrigger id={`${formId}-area`} className="w-full">
                      <SelectValue placeholder="選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      {AREAS.map((area) => (
                        <SelectItem key={area} value={area}>
                          {area}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor={`${formId}-tel`}>電話番号</Label>
                <Input
                  id={`${formId}-tel`}
                  name="tel"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="090-1234-5678"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor={`${formId}-email`}>メールアドレス</Label>
                <Input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  spellCheck={false}
                  placeholder="example@mail.com"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="mt-1 w-full">
                この内容で相談を申し込む
              </Button>
              <p className="text-center text-[11px] leading-relaxed text-brand-ink-muted">
                ご入力いただいた情報は転職相談の目的以外には使用しません。
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
