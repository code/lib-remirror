/*
 * This file is auto generated by the build script. Or by running pnpm run prebuild within this package
 */

import React, { FC } from 'react';

import { CommandMenuItem } from '../base-components';
import { CenterAlign, CenterAlignProps } from '../commands/center-align';
import { Copy, CopyProps } from '../commands/copy';
import { CreateTable, CreateTableProps } from '../commands/create-table';
import { Cut, CutProps } from '../commands/cut';
import { DecreaseFontSize, DecreaseFontSizeProps } from '../commands/decrease-font-size';
import { DecreaseIndent, DecreaseIndentProps } from '../commands/decrease-indent';
import { IncreaseFontSize, IncreaseFontSizeProps } from '../commands/increase-font-size';
import { IncreaseIndent, IncreaseIndentProps } from '../commands/increase-indent';
import { InsertHorizontalRule, InsertHorizontalRuleProps } from '../commands/insert-horizontal-rule';
import { JustifyAlign, JustifyAlignProps } from '../commands/justify-align';
import { LeftAlign, LeftAlignProps } from '../commands/left-align';
import { Paste, PasteProps } from '../commands/paste';
import { Redo, RedoProps } from '../commands/redo';
import { RightAlign, RightAlignProps } from '../commands/right-align';
import { ToggleBlockquote, ToggleBlockquoteProps } from '../commands/toggle-blockquote';
import { ToggleBold, ToggleBoldProps } from '../commands/toggle-bold';
import { ToggleBulletList, ToggleBulletListProps } from '../commands/toggle-bullet-list';
import { ToggleCallout, ToggleCalloutProps } from '../commands/toggle-callout';
import { ToggleCodeBlock, ToggleCodeBlockProps } from '../commands/toggle-code-block';
import { ToggleCode, ToggleCodeProps } from '../commands/toggle-code';
import { ToggleColumns, ToggleColumnsProps } from '../commands/toggle-columns';
import { ToggleHeading, ToggleHeadingProps } from '../commands/toggle-heading';
import { ToggleItalic, ToggleItalicProps } from '../commands/toggle-italic';
import { ToggleOrderedList, ToggleOrderedListProps } from '../commands/toggle-ordered-list';
import { ToggleStrike, ToggleStrikeProps } from '../commands/toggle-strike';
import { ToggleSubscript, ToggleSubscriptProps } from '../commands/toggle-subscript';
import { ToggleSuperscript, ToggleSuperscriptProps } from '../commands/toggle-superscript';
import { ToggleTaskList, ToggleTaskListProps } from '../commands/toggle-task-list';
import { ToggleUnderline, ToggleUnderlineProps } from '../commands/toggle-underline';
import { ToggleWhitespace, ToggleWhitespaceProps } from '../commands/toggle-whitespace';
import { Undo, UndoProps } from '../commands/undo';

export type CenterAlignMenuItemProps = Omit<CenterAlignProps<typeof CommandMenuItem>, 'as'>;

export const CenterAlignMenuItem: FC<CenterAlignMenuItemProps> = (props) => {
  return <CenterAlign as={CommandMenuItem} {...props} />;
};

export type CopyMenuItemProps = Omit<CopyProps<typeof CommandMenuItem>, 'as'>;

export const CopyMenuItem: FC<CopyMenuItemProps> = (props) => {
  return <Copy as={CommandMenuItem} {...props} />;
};

export type CreateTableMenuItemProps = Omit<CreateTableProps<typeof CommandMenuItem>, 'as'>;

export const CreateTableMenuItem: FC<CreateTableMenuItemProps> = (props) => {
  return <CreateTable as={CommandMenuItem} {...props} />;
};

export type CutMenuItemProps = Omit<CutProps<typeof CommandMenuItem>, 'as'>;

export const CutMenuItem: FC<CutMenuItemProps> = (props) => {
  return <Cut as={CommandMenuItem} {...props} />;
};

export type DecreaseFontSizeMenuItemProps = Omit<DecreaseFontSizeProps<typeof CommandMenuItem>, 'as'>;

export const DecreaseFontSizeMenuItem: FC<DecreaseFontSizeMenuItemProps> = (props) => {
  return <DecreaseFontSize as={CommandMenuItem} {...props} />;
};

export type DecreaseIndentMenuItemProps = Omit<DecreaseIndentProps<typeof CommandMenuItem>, 'as'>;

export const DecreaseIndentMenuItem: FC<DecreaseIndentMenuItemProps> = (props) => {
  return <DecreaseIndent as={CommandMenuItem} {...props} />;
};

export type IncreaseFontSizeMenuItemProps = Omit<IncreaseFontSizeProps<typeof CommandMenuItem>, 'as'>;

export const IncreaseFontSizeMenuItem: FC<IncreaseFontSizeMenuItemProps> = (props) => {
  return <IncreaseFontSize as={CommandMenuItem} {...props} />;
};

export type IncreaseIndentMenuItemProps = Omit<IncreaseIndentProps<typeof CommandMenuItem>, 'as'>;

export const IncreaseIndentMenuItem: FC<IncreaseIndentMenuItemProps> = (props) => {
  return <IncreaseIndent as={CommandMenuItem} {...props} />;
};

export type InsertHorizontalRuleMenuItemProps = Omit<InsertHorizontalRuleProps<typeof CommandMenuItem>, 'as'>;

export const InsertHorizontalRuleMenuItem: FC<InsertHorizontalRuleMenuItemProps> = (props) => {
  return <InsertHorizontalRule as={CommandMenuItem} {...props} />;
};

export type JustifyAlignMenuItemProps = Omit<JustifyAlignProps<typeof CommandMenuItem>, 'as'>;

export const JustifyAlignMenuItem: FC<JustifyAlignMenuItemProps> = (props) => {
  return <JustifyAlign as={CommandMenuItem} {...props} />;
};

export type LeftAlignMenuItemProps = Omit<LeftAlignProps<typeof CommandMenuItem>, 'as'>;

export const LeftAlignMenuItem: FC<LeftAlignMenuItemProps> = (props) => {
  return <LeftAlign as={CommandMenuItem} {...props} />;
};

export type PasteMenuItemProps = Omit<PasteProps<typeof CommandMenuItem>, 'as'>;

export const PasteMenuItem: FC<PasteMenuItemProps> = (props) => {
  return <Paste as={CommandMenuItem} {...props} />;
};

export type RedoMenuItemProps = Omit<RedoProps<typeof CommandMenuItem>, 'as'>;

export const RedoMenuItem: FC<RedoMenuItemProps> = (props) => {
  return <Redo as={CommandMenuItem} {...props} />;
};

export type RightAlignMenuItemProps = Omit<RightAlignProps<typeof CommandMenuItem>, 'as'>;

export const RightAlignMenuItem: FC<RightAlignMenuItemProps> = (props) => {
  return <RightAlign as={CommandMenuItem} {...props} />;
};

export type ToggleBlockquoteMenuItemProps = Omit<ToggleBlockquoteProps<typeof CommandMenuItem>, 'as'>;

export const ToggleBlockquoteMenuItem: FC<ToggleBlockquoteMenuItemProps> = (props) => {
  return <ToggleBlockquote as={CommandMenuItem} {...props} />;
};

export type ToggleBoldMenuItemProps = Omit<ToggleBoldProps<typeof CommandMenuItem>, 'as'>;

export const ToggleBoldMenuItem: FC<ToggleBoldMenuItemProps> = (props) => {
  return <ToggleBold as={CommandMenuItem} {...props} />;
};

export type ToggleBulletListMenuItemProps = Omit<ToggleBulletListProps<typeof CommandMenuItem>, 'as'>;

export const ToggleBulletListMenuItem: FC<ToggleBulletListMenuItemProps> = (props) => {
  return <ToggleBulletList as={CommandMenuItem} {...props} />;
};

export type ToggleCalloutMenuItemProps = Omit<ToggleCalloutProps<typeof CommandMenuItem>, 'as'>;

export const ToggleCalloutMenuItem: FC<ToggleCalloutMenuItemProps> = (props) => {
  return <ToggleCallout as={CommandMenuItem} {...props} />;
};

export type ToggleCodeBlockMenuItemProps = Omit<ToggleCodeBlockProps<typeof CommandMenuItem>, 'as'>;

export const ToggleCodeBlockMenuItem: FC<ToggleCodeBlockMenuItemProps> = (props) => {
  return <ToggleCodeBlock as={CommandMenuItem} {...props} />;
};

export type ToggleCodeMenuItemProps = Omit<ToggleCodeProps<typeof CommandMenuItem>, 'as'>;

export const ToggleCodeMenuItem: FC<ToggleCodeMenuItemProps> = (props) => {
  return <ToggleCode as={CommandMenuItem} {...props} />;
};

export type ToggleColumnsMenuItemProps = Omit<ToggleColumnsProps<typeof CommandMenuItem>, 'as'>;

export const ToggleColumnsMenuItem: FC<ToggleColumnsMenuItemProps> = (props) => {
  return <ToggleColumns as={CommandMenuItem} {...props} />;
};

export type ToggleHeadingMenuItemProps = Omit<ToggleHeadingProps<typeof CommandMenuItem>, 'as'>;

export const ToggleHeadingMenuItem: FC<ToggleHeadingMenuItemProps> = (props) => {
  return <ToggleHeading as={CommandMenuItem} {...props} />;
};

export type ToggleItalicMenuItemProps = Omit<ToggleItalicProps<typeof CommandMenuItem>, 'as'>;

export const ToggleItalicMenuItem: FC<ToggleItalicMenuItemProps> = (props) => {
  return <ToggleItalic as={CommandMenuItem} {...props} />;
};

export type ToggleOrderedListMenuItemProps = Omit<ToggleOrderedListProps<typeof CommandMenuItem>, 'as'>;

export const ToggleOrderedListMenuItem: FC<ToggleOrderedListMenuItemProps> = (props) => {
  return <ToggleOrderedList as={CommandMenuItem} {...props} />;
};

export type ToggleStrikeMenuItemProps = Omit<ToggleStrikeProps<typeof CommandMenuItem>, 'as'>;

export const ToggleStrikeMenuItem: FC<ToggleStrikeMenuItemProps> = (props) => {
  return <ToggleStrike as={CommandMenuItem} {...props} />;
};

export type ToggleSubscriptMenuItemProps = Omit<ToggleSubscriptProps<typeof CommandMenuItem>, 'as'>;

export const ToggleSubscriptMenuItem: FC<ToggleSubscriptMenuItemProps> = (props) => {
  return <ToggleSubscript as={CommandMenuItem} {...props} />;
};

export type ToggleSuperscriptMenuItemProps = Omit<ToggleSuperscriptProps<typeof CommandMenuItem>, 'as'>;

export const ToggleSuperscriptMenuItem: FC<ToggleSuperscriptMenuItemProps> = (props) => {
  return <ToggleSuperscript as={CommandMenuItem} {...props} />;
};

export type ToggleTaskListMenuItemProps = Omit<ToggleTaskListProps<typeof CommandMenuItem>, 'as'>;

export const ToggleTaskListMenuItem: FC<ToggleTaskListMenuItemProps> = (props) => {
  return <ToggleTaskList as={CommandMenuItem} {...props} />;
};

export type ToggleUnderlineMenuItemProps = Omit<ToggleUnderlineProps<typeof CommandMenuItem>, 'as'>;

export const ToggleUnderlineMenuItem: FC<ToggleUnderlineMenuItemProps> = (props) => {
  return <ToggleUnderline as={CommandMenuItem} {...props} />;
};

export type ToggleWhitespaceMenuItemProps = Omit<ToggleWhitespaceProps<typeof CommandMenuItem>, 'as'>;

export const ToggleWhitespaceMenuItem: FC<ToggleWhitespaceMenuItemProps> = (props) => {
  return <ToggleWhitespace as={CommandMenuItem} {...props} />;
};

export type UndoMenuItemProps = Omit<UndoProps<typeof CommandMenuItem>, 'as'>;

export const UndoMenuItem: FC<UndoMenuItemProps> = (props) => {
  return <Undo as={CommandMenuItem} {...props} />;
};