import os
import os.path as op
from invoke import run, task
from pathlib2 import Path, PurePath


@task
def serve():
    import SimpleHTTPServer
    if not op.isdir('build'):
        print 'No build directory. First run `invoke build`.'
        return
    # os.chdir('build')
    run('cd build && python -m SimpleHTTPServer')


@task
def build():
    clean()
    if not op.exists('build'):
        os.mkdir('build')
    for item in Path('.').iterdir():
        if item.is_dir():
            www_dir = item / 'www'
            if not item.name.startswith('.') and www_dir.is_dir():
                src = item / 'www'
                dest = Path('build') / item.name
                print 'Copying %s to %s' % (src, dest)
                run('cp -r %s %s' % (src, dest))


@task
def clean():
    if op.isdir('build'):
        run('rm -rf build/*')


@task
def publish():
    build()
    run('ghp-import -n -p build')


def copy_or_generate(src, dest):
    import shutil
    if not dest.exists():
        dest.parent.mkdir(parents=True, exist_ok=True)
    if src.suffix == '.html':
        with dest.open('w') as fp:
            fp.write(generate(str(src)))
    else:
        shutil.copy(str(src), str(dest))
