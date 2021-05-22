import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'
import Switch from '@material-ui/core/Switch'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { Field, Formik } from 'formik'
import { MdAccountCircle, MdChat, MdPerson, MdSettings } from 'react-icons/md'
import { useChatStyles } from '../../hooks'
import AutoSave from '../auto-save'
import Headline from '../headline'
import type { ChatStyles } from '../../hooks/use-chat-styles'
import type { FieldProps } from 'formik'
import type { VFC } from 'react'

const StylesForm: VFC = () => {
  const [chatStyles, setChatStyles] = useChatStyles()

  return (
    <Formik initialValues={chatStyles} onSubmit={setChatStyles}>
      <form action="/">
        <section>
          <Headline icon={<MdAccountCircle />} label="アイコン" />

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}>
              <Field name="avatar.show">
                {({ field }: FieldProps<boolean, ChatStyles>) => (
                  <FormControlLabel
                    control={
                      <Switch
                        checked={field.value}
                        id={field.name}
                        onChange={field.onChange}
                      />
                    }
                    label="表示する"
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="avatar.size">
                {({ field, form }: FieldProps<number, ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.avatar.show}
                    label="大きさ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
          </Grid>
        </section>

        <section>
          <Headline icon={<MdPerson />} label="名前" />

          <Typography component="h3" gutterBottom variant="subtitle1">
            オーナー
          </Typography>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}>
              <Field name="ownerName.show">
                {({ field }: FieldProps<boolean, ChatStyles>) => (
                  <FormControlLabel
                    control={
                      <Switch
                        checked={field.value}
                        id={field.name}
                        onChange={field.onChange}
                      />
                    }
                    label="表示する"
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="ownerName.fontSize">
                {({ field, form }: FieldProps<number, ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.ownerName.show}
                    label="大きさ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="ownerName.color">
                {({ field, form }: FieldProps<string, ChatStyles>) => (
                  <input
                    {...field}
                    disabled={!form.values.ownerName.show}
                    type="color"
                    value={form.values.ownerName.color}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography component="h4" gutterBottom variant="subtitle2">
                アウトライン
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="ownerName.outline.width">
                {({ field, form }: FieldProps<number, ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.ownerName.show}
                    label="太さ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="ownerName.outline.color">
                {({ field, form }: FieldProps<string, ChatStyles>) => (
                  <input
                    {...field}
                    disabled={!form.values.ownerName.show}
                    type="color"
                    value={form.values.ownerName.outline.color}
                  />
                )}
              </Field>
            </Grid>
          </Grid>

          <Typography component="h3" gutterBottom variant="subtitle1">
            モデレーター
          </Typography>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}>
              <Field name="moderatorName.show">
                {({ field }: FieldProps<boolean, ChatStyles>) => (
                  <FormControlLabel
                    control={
                      <Switch
                        checked={field.value}
                        id={field.name}
                        onChange={field.onChange}
                      />
                    }
                    label="表示する"
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="moderatorName.fontSize">
                {({ field, form }: FieldProps<number, ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.moderatorName.show}
                    label="大きさ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="moderatorName.color">
                {({ field, form }: FieldProps<string, ChatStyles>) => (
                  <input
                    {...field}
                    disabled={!form.values.moderatorName.show}
                    type="color"
                    value={form.values.moderatorName.color}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography component="h4" gutterBottom variant="subtitle2">
                アウトライン
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="moderatorName.outline.width">
                {({ field, form }: FieldProps<number, ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.moderatorName.show}
                    label="太さ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="moderatorName.outline.color">
                {({ field, form }: FieldProps<string, ChatStyles>) => (
                  <input
                    {...field}
                    disabled={!form.values.moderatorName.show}
                    type="color"
                    value={form.values.moderatorName.outline.color}
                  />
                )}
              </Field>
            </Grid>
          </Grid>

          <Typography component="h3" gutterBottom variant="subtitle1">
            メンバー
          </Typography>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}>
              <Field name="memberName.show">
                {({ field }: FieldProps<boolean, ChatStyles>) => (
                  <FormControlLabel
                    control={
                      <Switch
                        checked={field.value}
                        id={field.name}
                        onChange={field.onChange}
                      />
                    }
                    label="表示する"
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="memberName.fontSize">
                {({ field, form }: FieldProps<number, ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.memberName.show}
                    label="大きさ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="memberName.color">
                {({ field, form }: FieldProps<string, ChatStyles>) => (
                  <input
                    {...field}
                    disabled={!form.values.memberName.show}
                    type="color"
                    value={form.values.memberName.color}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography component="h4" gutterBottom variant="subtitle2">
                アウトライン
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              {' '}
              <Field name="memberName.outline.width">
                {({ field, form }: FieldProps<number, ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.memberName.show}
                    label="太さ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="memberName.outline.color">
                {({ field, form }: FieldProps<string, ChatStyles>) => (
                  <input
                    {...field}
                    disabled={!form.values.memberName.show}
                    type="color"
                    value={form.values.memberName.outline.color}
                  />
                )}
              </Field>
            </Grid>
          </Grid>

          <Typography component="h3" gutterBottom variant="subtitle1">
            一般ユーザー
          </Typography>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}>
              <Field name="authorName.show">
                {({ field }: FieldProps<boolean, ChatStyles>) => (
                  <FormControlLabel
                    control={
                      <Switch
                        checked={field.value}
                        id={field.name}
                        onChange={field.onChange}
                      />
                    }
                    label="表示する"
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="authorName.fontSize">
                {({ field, form }: FieldProps<number, ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.authorName.show}
                    label="大きさ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="authorName.color">
                {({ field, form }: FieldProps<string, ChatStyles>) => (
                  <input
                    {...field}
                    disabled={!form.values.authorName.show}
                    type="color"
                    value={form.values.authorName.color}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography component="h4" gutterBottom variant="subtitle2">
                アウトライン
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="authorName.outline.width">
                {({ field, form }: FieldProps<number, ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.authorName.show}
                    label="太さ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="authorName.outline.color">
                {({ field, form }: FieldProps<string, ChatStyles>) => (
                  <input
                    {...field}
                    disabled={!form.values.authorName.show}
                    type="color"
                    value={form.values.authorName.outline.color}
                  />
                )}
              </Field>
            </Grid>
          </Grid>
        </section>

        <section>
          <Headline icon={<MdChat />} label="メッセージ" />

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}></Grid>
            <Grid item sm={4} xs={12}>
              <Field name="message.fontSize">
                {({ field }: FieldProps<number, ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    label="大きさ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="message.color">
                {({ field, form }: FieldProps<string, ChatStyles>) => (
                  <input
                    {...field}
                    type="color"
                    value={form.values.message.color}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography component="h4" gutterBottom variant="subtitle2">
                アウトライン
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="message.outline.width">
                {({ field }: FieldProps<ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    label="太さ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="message.outline.color">
                {({ field, form }: FieldProps<string, ChatStyles>) => (
                  <input
                    {...field}
                    type="color"
                    value={form.values.message.outline.color}
                  />
                )}
              </Field>
            </Grid>
          </Grid>
        </section>

        <section>
          <Headline icon={<MdSettings />} label="その他" />

          <FormGroup>
            <Field name="engagementMessage.show">
              {({ field }: FieldProps<boolean, ChatStyles>) => (
                <FormControlLabel
                  control={
                    <Switch
                      checked={field.value}
                      id={field.name}
                      onChange={field.onChange}
                    />
                  }
                  label="入室メッセージを表示する"
                />
              )}
            </Field>
            <Field name="superChatBackground.show">
              {({ field }: FieldProps<boolean, ChatStyles>) => (
                <FormControlLabel
                  control={
                    <Switch
                      checked={field.value}
                      id={field.name}
                      onChange={field.onChange}
                    />
                  }
                  label="スーパーチャットの背景を表示する"
                />
              )}
            </Field>
            <Field name="newMemberBackground.show">
              {({ field }: FieldProps<boolean, ChatStyles>) => (
                <FormControlLabel
                  control={
                    <Switch
                      checked={field.value}
                      id={field.name}
                      onChange={field.onChange}
                    />
                  }
                  htmlFor={field.name}
                  label="メンバー登録アナウンスの背景を表示する"
                />
              )}
            </Field>
          </FormGroup>
        </section>

        <AutoSave />
      </form>
    </Formik>
  )
}

export default StylesForm
